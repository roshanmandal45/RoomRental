import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { amount, transactionUuid } = await req.json();

    if (!amount || !transactionUuid) {
      return NextResponse.json(
        {
          error: "Amount and transaction UUID are required",
        },
        { status: 400 }
      );
    }

    const productCode = process.env.ESEWA_PRODUCT_CODE!;
    const secretKey = process.env.ESEWA_SECRET_KEY!;

    const totalAmount = Number(amount);

    const message = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;

    const signature = crypto
      .createHmac("sha256", secretKey)
      .update(message)
      .digest("base64");

    return NextResponse.json({
      amount: totalAmount,
      tax_amount: 0,
      total_amount: totalAmount,

      transaction_uuid: transactionUuid,

      product_code: productCode,

      product_service_charge: 0,
      product_delivery_charge: 0,

      success_url:
        "http://localhost:3000/payment/success",

      failure_url:
        "http://localhost:3000/payment/failure",

      signed_field_names:
        "total_amount,transaction_uuid,product_code",

      signature: signature,
    });
  } catch (error) {
    console.error("eSewa error:", error);

    return NextResponse.json(
      {
        error: "Could not initialize eSewa payment",
      },
      { status: 500 }
    );
  }
}