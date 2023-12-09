-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "addressReceiver" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,
    "amount" FLOAT NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);
