const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref:"User", required: true },
  business_name: { type: String, required: true, maxlength: 200 },
  store_name: { type: String, required: true, maxlength: 200 },
  store_category: { 
    type: String, 
    required: true, 
    maxlength: 200,
    enum: [
      "Department store",
      "Grocery store",
      "Restaurant store",
      "Clothing store",
      "Accessory store",
      "Pharmacy",
      "Technology store", 
      "Pet store", 
      "Toy store", 
      "Specialty store", 
      "Thrift store",
      "Service provider",
      "Kiosk",
    ] 
  },
  store_logo: { type: String, required: true }
});

// Virtual for user's URL
StoreSchema.virtual("url").get(function () {
  return `/stores/${this._id}`;
});

// Export model
module.exports = mongoose.model("Store", Store);