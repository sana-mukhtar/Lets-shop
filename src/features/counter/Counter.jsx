import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectCount, selectStatus } from "./counterSlice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return <div></div>
}
