import { Schema, model } from "mongoose";
import { SoldByModel, PaymentState } from "../../constants/enums.js";

const soldProductSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      enum: [...PaymentState],
      default: "UNPAID",
    },
    soldBy: {
      type: Schema.Types.ObjectId,
      refPath: "soldByModel",
      required: true,
    },
    soldByModel: {
      type: String,
      enum: [...SoldByModel],
      required: true,
    },
  },
  { timestamps: true }
);
const SoldProduct = model("SoldProduct", soldProductSchema);
export default SoldProduct;
