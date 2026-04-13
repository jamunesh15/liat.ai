import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    interestType: {
      type: String,
      enum: ['leasing', 'sponsorship', 'event'],
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
