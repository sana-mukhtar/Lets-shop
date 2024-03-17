import { myCache } from "../app.js";
import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { Product } from "../models/products.js";
import { User } from "../models/user.js";
import { calculatePercentage } from "../utils/features.js";

export const getDashboardStats = TryCatch(async (req, res, next) => {
  let stats = {};

  if (myCache.has("admin-stats"))
    stats = JSON.parse(myCache.get("admin-stats") as string);
  else {
    const today = new Date();
    const sixMonthsago = new Date();
    sixMonthsago.setMonth(sixMonthsago.getMonth() - 6);

    const thisMonth = {
      start: new Date(today.getFullYear(), today.getMonth(), 1),
      end: today,
    };

    const lastMonth = {
      start: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      end: new Date(today.getFullYear(), today.getMonth(), 0),
    };

    const thisMonthProductsPromise = Product.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthProductsPromise = Product.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const thisMonthUsersPromise = User.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthUsersPromise = User.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const thisMonthOrdersPromise = Order.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthOrdersPromise = Order.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const lastSixMonthOrderPromise = Order.find({
      createdAt: {
        $gte: sixMonthsago,
        $lte: today,
      },
    });

    const latestTransactionsPromise = Order.find({})
      .select(["orderItems", "discount", "total", "status"])
      .limit(4);

    const [
      thisMonthProducts,
      thisMonthUsers,
      thisMonthOrders,
      lastMonthProducts,
      lastMonthUsers,
      lastMonthOrders,
      productsCount,
      usersCount,
      allOrders,
      lastSixMonthOrder,
      categories,
      femaleUsersCount,
      latestTransactions,
    ] = await Promise.all([
      thisMonthProductsPromise,
      thisMonthUsersPromise,
      thisMonthOrdersPromise,
      lastMonthProductsPromise,
      lastMonthUsersPromise,
      lastMonthOrdersPromise,
      Product.countDocuments(),
      User.countDocuments(),
      Order.find({}).select("total"),
      lastSixMonthOrderPromise,
      Product.distinct("category"),
      User.countDocuments({ gender: "female" }),
      latestTransactionsPromise,
    ]);

    const thisMonthRevenue = thisMonthOrders.reduce(
      (total, order) => total + (order.total || 0),
      0
    );
    const lastMonthRevenue = lastMonthOrders.reduce(
      (total, order) => total + (order.total || 0),
      0
    );
    const changePercent = {
      revenue: calculatePercentage(thisMonthRevenue, lastMonthRevenue),
      product: calculatePercentage(
        thisMonthProducts.length,
        lastMonthProducts.length
      ),
      user: calculatePercentage(thisMonthUsers.length, lastMonthUsers.length),
      order: calculatePercentage(
        thisMonthOrders.length,
        lastMonthOrders.length
      ),
    };

    const revenue = allOrders.reduce(
      (total, order) => total + (order.total || 0),
      0
    );

    const count = {
      revenue,
      user: usersCount,
      product: productsCount,
      order: allOrders.length,
    };

    const orderMonthCounts = new Array(6).fill(0);
    const orderMonthlyRevenue = new Array(6).fill(0);

    lastSixMonthOrder.forEach((order) => {
      const creationDate = order.createdAt;
      const monthDiff = today.getMonth() - creationDate.getMonth();
      if (monthDiff < 6) {
        orderMonthCounts[6 - monthDiff - 1] += 1;
        orderMonthlyRevenue[6 - monthDiff - 1] += order.total;
      }
    });
    const categoriesCountPromise = categories.map((category) =>
      Product.countDocuments({ category })
    );
    const categoriesCount = await Promise.all(categoriesCountPromise);

    const categoryCount: Record<string, number>[] = [];
    categories.forEach((category, i) => {
      categoryCount.push({
        [category]: Math.round((categoriesCount[i] / productsCount) * 100),
      });
    });

    const usersRatio = {
      female: femaleUsersCount,
      male: usersCount - femaleUsersCount,
    };

    const modifiedLatestTransactions = latestTransactions.map((i) => ({
      _id: i._id,
      discount: i.discount,
      amount : i.total, 
      quantity : i.orderItems.length,
      status : i.status,
    }));

    stats = {
      categoryCount,
      changePercent,
      count,
      chart: {
        order: orderMonthCounts,
        revenue: orderMonthlyRevenue,
      },
      usersRatio,
      latestTransactions : modifiedLatestTransactions,
    };

    myCache.set("admin-stats" , JSON.stringify(stats))
  }

  return res.status(200).json({
    success: true,
    stats,
  });
});

export const getPieCharts = TryCatch(async (req , res , next) => {
  let charts;

  if(myCache.has("admin-pie-charts")) charts = JSON.parse(myCache.get("admin-pie-charts") as string)

  else{
    const [processingOrder , shippedOrder , deliveredOrder] = await Promise.all([
      Order.countDocuments({ status: "Processing" }),
      Order.countDocuments({ status: "Shipped" }),
      Order.countDocuments({ status: "Delivered" }),
    ]);
    const orderFulfillment = {
      Processing : processingOrder,
      shipped : shippedOrder,
      delivered : deliveredOrder
    } 
 
    charts = {
      orderFulfillment,
    }

    myCache.set("admin-pie-charts" , JSON.stringify(charts));
  }
   return res.status(200).json({
     success: true,
     charts,
   });
});

export const getBarCharts = TryCatch(async () => {});

export const getLineCharts = TryCatch(async () => {});
