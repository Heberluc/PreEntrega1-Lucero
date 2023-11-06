import { FaCartPlus } from "react-icons/fa";

import React from 'react'

export const CartWidget = () => {
  return (
    <div className="d-flex">
        <FaCartPlus size={40} />
        <p className="mx-1">3</p>
    </div>
  )
}
