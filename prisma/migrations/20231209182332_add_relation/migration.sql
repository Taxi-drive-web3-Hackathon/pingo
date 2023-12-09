/*
  Warnings:

  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "payment";

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "addressReceiver" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
