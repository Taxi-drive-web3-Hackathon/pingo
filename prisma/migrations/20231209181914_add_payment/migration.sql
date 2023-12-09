-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "addressReceiver" TEXT NOT NULL,
    "chainId" TEXT,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);
