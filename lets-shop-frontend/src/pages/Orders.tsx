import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataType = {
    _id : string;
    amount : number;
    quantity : number;
    discount : number;
    status : ReactElement;
    action : ReactElement;

}

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
    const [rows] = useState<DataType[]>([{
        _id : "85202345MBVcPxZE",
    amount : 40000,
    quantity : 1,
    discount : 200,
    status : <span className="text-red-600">Processing</span>,
    action : <Link to={`/order/85202345MBVcPxZE`}>View</Link>
    }
    ])
    const Table = TableHOC<DataType>(column , rows , "dashboard-product-box" , "Orders" , rows.length>6)()
  return (
    <div className="w-full max-w-[1367px] m-auto overflow-auto">
        <h1 className="text-left mx-4 my-4 text-2xl"> MY ORDERS</h1>
      {Table}
    </div>
  )
}

export default Orders
