import screenLogin from "@/assets/screen-login.png";
import screenRegister from "@/assets/screen-register.png";
import screenHome from "@/assets/screen-home.png";
import screenAccount from "@/assets/screen-account.png";
import screenDeposit from "@/assets/screen-deposit.png";
import screenUpi from "@/assets/screen-upi.png";
import screenBank from "@/assets/screen-bank.png";
import screenWithdraw from "@/assets/screen-withdraw.png";
import screenHistory from "@/assets/screen-history.png";
import screenAgency from "@/assets/screen-agency.png";
import screenGift from "@/assets/screen-gift.png";
import { LOGIN_URL, REGISTER_URL } from "@/lib/constants";

type Article = {
  id: string;
  image: string;
  alt: string;
  title: string;
  body: string[];
  cta?: { label: string; href: string };
};

const articles: Article[] = [
  {
    id: "register",
    image: screenRegister,
    alt: "BDG Game registration screen on mobile",
    title: "How to Register on BDG Game",
    body: [
      "Creating your BDG Game (bdgwin) account takes less than a minute. Tap Register, choose +91 and enter your active mobile number.",
      "Set a strong password, confirm it, and add an invite code if you have one to unlock extra rewards. Accept the Privacy Agreement and tap Register.",
    ],
    cta: { label: "Register Now", href: REGISTER_URL },
  },
  {
    id: "login",
    image: screenLogin,
    alt: "BDG Game login screen with phone and email tabs",
    title: "BDG Game Login — Sign In Securely",
    body: [
      "Open the login screen and choose Phone Number or Email / Account. Enter your registered mobile and password, then tap Log in.",
      "Forgot your password? Use the Forgot Password option or reach out via Customer Service from the same screen.",
    ],
    cta: { label: "Login", href: LOGIN_URL },
  },
  {
    id: "home",
    image: screenHome,
    alt: "BDG Game home dashboard with game categories",
    title: "Inside the BDG Game Dashboard",
    body: [
      "Once signed in, the dashboard surfaces every category at a glance — Lottery, Original, Slots, Sports, Popular, Casino and Fishing.",
      "The bottom bar keeps Home, Activity, Promotion and Account one tap away, with the daily Get ₹500 reward front and centre.",
    ],
  },
  {
    id: "account",
    image: screenAccount,
    alt: "BDG Game account screen showing wallet and history",
    title: "Your Account & Wallet at a Glance",
    body: [
      "The Account section shows your UID, VIP level and total balance. Quick actions for ARWallet, Deposit, Withdraw and VIP sit right under your profile.",
      "Below, you can review Game History, Transactions, Deposits, Withdrawals and Notifications — everything you need to manage your play.",
    ],
  },
  {
    id: "deposit",
    image: screenDeposit,
    alt: "BDG Game deposit screen with UPI, USDT and ARPay options",
    title: "How to Deposit Money in BDG Game",
    body: [
      "Open the Deposit page and pick a channel — UPI-QR, UPI-QRpay, Wake UP-APP, USDT or ARPay. Some channels offer extra bonus percentages.",
      "Enter your deposit amount and tap the gold Deposit button. Funds typically reflect in your wallet within minutes.",
    ],
  },
  {
    id: "upi",
    image: screenUpi,
    alt: "BDG Game ArUpiPay screen with Paytm, PhonePe and QR code",
    title: "Paying via UPI — Paytm, PhonePe & QR",
    body: [
      "On the ArUpiPay screen, choose Paytm or PhonePe, or scan the QR code with another device using your preferred UPI app.",
      "After paying, return and tap Submit to confirm your UTR. Watch the countdown timer to make sure your transaction completes in time.",
    ],
  },
  {
    id: "bank",
    image: screenBank,
    alt: "BDG Game add bank account form",
    title: "Add a Bank Account for Withdrawals",
    body: [
      "To withdraw winnings, link a bank account from the Account section. Choose your bank, then enter the account holder name, account number, phone, email and IFSC code.",
      "Double-check every field before tapping Save — accurate details ensure your withdrawals are processed without delay.",
    ],
  },
  {
    id: "withdraw",
    image: screenWithdraw,
    alt: "BDG Game withdraw screen with bank card, USDT and UPI options",
    title: "How to Withdraw Money from BDG Game",
    body: [
      "Open the Withdraw screen, pick a channel — Bank Card, USDT or UPI — and select the bank account you previously linked.",
      "Enter the amount (or tap All to withdraw the full balance) and confirm with the gold Withdraw button. Most requests are processed within hours.",
    ],
  },
  {
    id: "history",
    image: screenHistory,
    alt: "BDG Game withdrawal history list",
    title: "Track Every Withdrawal in History",
    body: [
      "The Withdrawal history screen lists every request with balance, type, time and a unique order number you can copy for support.",
      "Filter by channel — All, ARPay, Bank Card, USDT — or by date range to quickly find any past transaction.",
    ],
  },
  {
    id: "agency",
    image: screenAgency,
    alt: "BDG Game agency / refer & earn screen",
    title: "Refer & Earn with the Agency Program",
    body: [
      "The Agency screen shows yesterday's commission alongside live stats for both direct and team subordinates — registrations, deposits and amounts.",
      "Share your invitation code or download the QR code to onboard new players and grow your daily commission income.",
    ],
    cta: { label: "Start Inviting", href: REGISTER_URL },
  },
  {
    id: "gift",
    image: screenGift,
    alt: "BDG Game gift code redeem screen",
    title: "Redeem a BDG Game Gift Code",
    body: [
      "Head to the Gift section, paste your gift code into the input field and tap Receive. Bonuses are credited instantly to your wallet.",
      "Every redemption is logged under History so you can keep track of every reward you've claimed.",
    ],
  },
];

export function GuideArticles() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Step-by-Step Guides
          </span>
          <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
            BDG Game <span className="text-primary">Walkthrough</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Real screens from the app — see exactly how to register, log in, deposit, withdraw and earn.
          </p>
        </div>

        <div className="mt-12 space-y-16 md:mt-14 md:space-y-20">
          {articles.map((a, i) => (
            <article
              key={a.id}
              id={a.id}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-gold)] opacity-20 blur-3xl" />
                <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-2 shadow-[var(--shadow-card)] sm:max-w-[280px]">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>
              </div>
              <div>
                <span className="font-display text-xs font-bold text-primary md:text-sm">
                  {String(i + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-black md:text-3xl">{a.title}</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
                  {a.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {a.cta && (
                  <a
                    href={a.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center rounded-xl bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
                  >
                    {a.cta.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
