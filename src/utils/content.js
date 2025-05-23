// Section1
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";
import MainBG from "../assets/images/section1/main-bg-0_1.webp";
import TreesImage from "../assets/images/section1/main-bg-1_1.webp";
import CliffImage from "../assets/images/section1/main-bg-2_1.webp";
import HorseImage from "../assets/images/section1/main-bg-3.png";

// Section3
import EthImg from "../assets/images/section3/eth.webp";
import BscImg from "../assets/images/section3/bsc.webp";
import PolygonImg from "../assets/images/section3/polygon.webp";
import OptimismImg from "../assets/images/section3/optimism.webp";
import GnosisImg from "../assets/images/section3/gnosis.webp";
import AvalancheImg from "../assets/images/section3/avalanche.webp";
import ArbitrumImg from "../assets/images/section3/arbitrum.webp";
import FantomImg from "../assets/images/section3/fantom.webp";
import KlaytnImg from "../assets/images/section3/klaytn.webp";
import AuroraImg from "../assets/images/section3/aurora.webp";

// Section4
import NewsImg from "../assets/images/section4/news-image.webp";
import Phone1Img from "../assets/images/section4/wallet-buy.webp";
import Phone2Img from "../assets/images/section4/wallet-stake.webp";
import Phone3Img from "../assets/images/section4/wallet-store.webp";
import Phone4Img from "../assets/images/section4/wallet-swap.webp";
import Phone5Img from "../assets/images/section4/wallet-transfer.webp";

// Section5
import BannerBgImage from "../assets/images/section5/news-block-background.webp";
import BannerBgImageMobile from "../assets/images/section5/news-block-background-mobile.webp";

// Section6
import Sec6Image1 from "../assets/images/section6/aggregation-protocol.webp";
import Sec6Image2 from "../assets/images/section6/limit-order-protocol.webp";
import Sec6Image3 from "../assets/images/section6/liquidity-protocol.webp";
import Sec6Image4 from "../assets/images/section6/earn_1.webp";
import Sec6Image5 from "../assets/images/section6/rabbithole.webp";

// Section7
import Sec7Image1 from "../assets/images/section7/api.webp";
import Sec7Image2 from "../assets/images/section7/grant-program.webp";

// Section8
import ShieldImage from "../assets/images/section8/shield.webp";

// Section9
import Sec9Image1 from "../assets/images/section9/dao.webp";
import Sec9Image2 from "../assets/images/section9/token.webp";

// Section10
import DiscordImage from "../assets/images/section10/discord.webp";
import RedditImage from "../assets/images/section10/reddit.webp";
import TelegramImage from "../assets/images/section10/telegram.webp";
import TwitterImage from "../assets/images/section10/twitter.webp";

// Section11
import Near from "../assets/images/section11/near.svg";
import Metamask from "../assets/images/section11/metamask.svg";
import Trustwallet from "../assets/images/section11/trustwallet.svg";
import Opium from "../assets/images/section11/opium.svg";
import Zerion from "../assets/images/section11/zerion.svg";
import Revolut from "../assets/images/section11/revolut.svg";
import Pantera from "../assets/images/section11/pantera.svg";
import Binancelab from "../assets/images/section11/binance-lab.svg";
import Dragonflycapital from "../assets/images/section11/dragonfly-capital.svg";
import Galaxydigital from "../assets/images/section11/galaxy-digital.svg";
import Paraficapital from "../assets/images/section11/parafi-capital.svg";
import Gemini from "../assets/images/section11/gemini.svg";
import Mew from "../assets/images/section11/mew.svg";
import Atoken from "../assets/images/section11/atoken.svg";
import Dappradar from "../assets/images/section11/dappradar.svg";
import Graph from "../assets/images/section11/graph.svg";
import Staker from "../assets/images/section11/staker.svg";
import Bitpay from "../assets/images/section11/bitPay.svg";

// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// Navbar
import Logo from "../assets/images/logo.svg";

export const section1Content = {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title: "One great access",
  subtitle: "to building your own game.",
};

export const section2Content = {
  items: [
    { counter: 345, subtitle: "Liquidity sources" },
    { counter: 345, before: "$", after: "B+", subtitle: "Total volume" },
    { counter: 4.4, after: "M+", subtitle: "Total wallets", decimals: true },
    { counter: 28.7, after: "M+", subtitle: "Total Trades", decimals: true },
  ],
};

export const section3Content = {
  title: "Optimize your gaming across hundreds of DEXes on multiple networks",
  ITEMS: [
    { logo: EthImg, name: "Ethereum" },
    { logo: BscImg, name: "BNB Chain" },
    { logo: PolygonImg, name: "Polygon" },
    { logo: OptimismImg, name: "Optimism" },
    { logo: GnosisImg, name: "Gnosis" },
    { logo: AvalancheImg, name: "Avalanche" },
    { logo: ArbitrumImg, name: "Arbitrum" },
    { logo: FantomImg, name: "Fantom" },
    { logo: KlaytnImg, name: "Klaytn" },
    { logo: AuroraImg, name: "Aurora" },
  ],
};

export const section4Content = {
  top: {
    title: "Never-ending game building",
    subtitle:
      "Gamepass helps gamers builder their own game easily and give you access to premium resources. ",
    image: NewsImg,
  },
  bottom: {
    title: "Gamepass Wallet",
    TABS: [
      {
        name: "Buy",
        image: Phone1Img,
        subtitle:
          "Buy your game assets with your bank card using our partner fiat gateway providers.",
      },
      {
        name: "Store",
        image: Phone3Img,
        subtitle:
          "Your game progress and NFTs is protected with the most sophisticated security measures.",
      },
      {
        name: "Transfer",
        image: Phone5Img,
        subtitle: "Transfer your game assets in multiple blockchain networks.",
      },
      {
        name: "Swap",
        image: Phone4Img,
        subtitle: "Swap any asset of tokens at the best rates.",
      },
      {
        name: "Stake",
        image: Phone2Img,
        subtitle:
          "Stake gamepass to participate in network governance and be eligible for gas costs refunds.",
      },
    ],
  },
};

export const section5Content = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Gamepass Fusion",
  subtitle:
    "The Fusion upgrade makes swaps on gamepass yet more efficient and secure, combining liquidity from the entire crypto market in one place.",
};

export const section6Content = {
  title: "Gamepass products",
  ITEMS: [
    {
      title: "Aggregation Protocol",
      subtitle:
        "Liquidity aggregation from multiple DEXes to ensure the best swap rates.",
      image: Sec6Image1,
    },
    {
      title: "Limit Order Protocol",
      subtitle:
        "The most innovative and flexible limit order functionality in DeFi.",
      image: Sec6Image2,
    },
    {
      title: "Liquidity Protocol",
      subtitle:
        "A next-generation AMM that offers capital efficiency to liquidity providers.",
      image: Sec6Image3,
    },
    {
      title: "Gamepass Earn",
      subtitle:
        "A derivative-based product offering liquidity providers attractive APYs.",
      image: Sec6Image4,
    },
    {
      title: "Gamepass RabbitHole",
      subtitle: "A feature that protects Solana users from sandwich attacks.",
      image: Sec6Image5,
    },
  ],
};

export const section7Content = {
  title: "Grow with our ecosystem",
  subtitle: "Build solutions alongside decentralized finance leaders",
  ITEMS: [
    {
      title: "Gamepass API",
      subtitle:
        "A cutting-edge discovery and routing algorithm that offers non-custodial asset swaps at the most attractive rates in major DeFi ecosystems.",
      image: Sec7Image1,
    },
    {
      title: "Gamepass Programs",
      subtitle:
        "An initiative that fosters the Gamepass Network's growth and incentivizes contributions through resources.",
      image: Sec7Image2,
    },
  ],
};

export const section8Content = {
  title: "Your decentralized finance shield",
  subtitle:
    "Gamepass uses sophisticated security measures to protect users' funds in swaps on other DeFi protocols",
  caption:
    "Gamepass is the most audited project in DeFi. See a list of the most important smart contract audits here.",
  ShieldImage,
};

export const section9Content = {
  title: "Empowered by the community",
  ITEMS: [
    {
      title: "Gamepass DAO",
      subtitle:
        "A governance tool that enables Gamepass stakers to vote for key protocol parameters.",
      image: Sec9Image1,
    },
    {
      title: "Gamepass token",
      subtitle:
        "A token that facilitates Gamepass protocol governance and participation in the network's evolution.",
      image: Sec9Image2,
    },
  ],
};

export const section10Content = {
  SOCIALS: [
    { name: "Telegram", image: TelegramImage },
    { name: "Discord", image: DiscordImage },
    { name: "Reddit", image: RedditImage },
    { name: "Twitter", image: TwitterImage },
  ],
};

export const Section11Content = {
  // title: "Partners and stakeholders",
  ITEMS: [
    // {
    //   link: "https://near.org/",
    //   image: Near,
    // },
    // {
    //   link: "https://metamask.io/",
    //   image: Metamask,
    // },
    // {
    //   link: "https://trustwallet.com/",
    //   image: Trustwallet,
    // },
    // {
    //   link: "https://opium.network/",
    //   image: Opium,
    // },
    // {
    //   link: "https://zerion.io/",
    //   image: Zerion,
    // },
    // {
    //   link: "https://www.revolut.com/",
    //   image: Revolut,
    // },
    // {
    //   link: "https://panteracapital.com/",
    //   image: Pantera,
    // },
    // {
    //   link: "https://labs.binance.com/",
    //   image: Binancelab,
    // },
    // {
    //   link: "https://www.dcp.capital/",
    //   image: Dragonflycapital,
    // },
    // {
    //   link: "https://www.galaxydigital.io/",
    //   image: Galaxydigital,
    // },
    // {
    //   link: "https://www.parafi.capital/",
    //   image: Paraficapital,
    // },
    // {
    //   link: "https://www.gemini.com/frontier-fund",
    //   image: Gemini,
    // },
    // {
    //   link: "https://www.myetherwallet.com/",
    //   image: Mew,
    // },
    // {
    //   link: "https://www.atoken.com/",
    //   image: Atoken,
    // },
    // {
    //   link: "https://dappradar.com/",
    //   image: Dappradar,
    // },
    // {
    //   link: "https://thegraph.com/",
    //   image: Graph,
    // },
    // {
    //   link: "https://staker.app/",
    //   image: Staker,
    // },
    // {
    //   link: "https://bitpay.com/",
    //   image: Bitpay,
    // },
  ],
};

export const footerContent = {
  protocols: {
    title: "Protocols",
    links: [
      { title: "Liquidity Protocol" },
      { title: "Aggregation Protocol" },
      { title: "Limit Order Protocol" },
    ],
  },
  governance: {
    title: "Governance",
    links: [
      { title: "Gamepass DAO" },
      { title: "Gamepass token" },
      { title: "Forum" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Press room" },
      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
    ],
  },
  developers: {
    title: "Governance",
    links: [
      { title: "Documentation" },
      { title: "GitHub" },
      { title: "Audit" },
      { title: "Bug bounty" },
    ],
  },
  subscribe: {
    title: "Subscribe to Gamepass newsletter",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    center: "© 2024 Gamepass, All Rights Reserved.",
  },
};

export const navbarContent = {
  Logo,
};
