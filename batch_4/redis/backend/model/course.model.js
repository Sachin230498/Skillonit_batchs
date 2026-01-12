import mongoose, { Schema, model } from "mongoose";
const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});
const keyFeaturesSchema = new mongoose.Schema({
    text: { type: String, required: true },

});
const CourseSchema = new Schema(
  {
    courseName: { type: String, required: true },
    courseUrl: { type: String, required: true },
    // category: { type: Schema.Types.ObjectId, required: tre },
    // categoryName: { type: String, required: true },
    image: { type: String },
    heading: { type: String, required: true },
    courseOverview: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    language: { type: String, required: true },
    totalEnrollment: { type: Number, default: 0 },
    // discountPercentage: { type: Number, default: 0 },
    // discount: { type: Number, default: 0 },
    // price: { type: Number},
    topics: { type: Array, default: [] },
    classType: {
      type: String,
      enum: [
        "Self Directed",
        "Offline/Online",
        "Offline Class",
        "Live Class",
        "One To One Class",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["Upcoming", "Live", "Finished"],
      default: "Upcoming",
    },
    faqs: [faqSchema],
    keyFeatures: [keyFeaturesSchema],
    course_meta_desc: { type: String, required: true },
    course_meta_title: { type: String, required: true },
    course_og: { type: String },
    availableCities: { type: Array, default: ["Buldhana"] },
  },
  {
    timestamps: true,
  }
);

const CourseModel = model("Course", CourseSchema);

export default CourseModel;
