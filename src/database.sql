-- Insert users (companies)
INSERT INTO "user" (name, email) VALUES
  ('Uber', 'uber@example.com'),
  ('Taxi', 'taxi@example.com'),
  ('Capify', 'capify@example.com');

-- Insert payments0
INSERT INTO Payment (addressReceiver, chainId, amount, userId) VALUES
  ('0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '12532609583862916517', 100, 1),
  ('0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '16015286601757825753', 150, 2),
  ('0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '14767482510784806043', 200, 3);

-- Select payments1
SELECT * FROM "Payment";
