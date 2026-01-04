// packages/types/db.ts

export type Profile = {
  id: string;           // auth.users.id
  created_at: string;  // ISO timestamp
  status: string;      // "active" | "disabled" (later)
  plan: string;        // "free" | "pro" | etc
};

export type Subscription = {
  id: string;
  user_id: string;
  status: string;      // "active" | "canceled" | "past_due"
  plan: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
};

export type Event = {
  id: string;
  user_id: string | null;
  event_name: string;
  created_at: string;
};
