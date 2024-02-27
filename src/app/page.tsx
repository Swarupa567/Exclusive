import NotificationBanner from "@/components/notificationBanner";
import NavBar from "@/components/navBar";
import HomeBanner from "@/components/pageComponents/homeBanner";
import FlashSales from "@/components/pageComponents/flashSales";
import Categories from "@/components/pageComponents/categories";
import BestSellingProducts from "@/components/pageComponents/bestSellingProducts";
import DiscountedBanner from "@/components/pageComponents/discountedBanner";
import ExploreProducts from "@/components/pageComponents/exploreProducts";
import NewArrivals from "@/components/pageComponents/newArrivals";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NotificationBanner />
      <NavBar />
      <HomeBanner />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <DiscountedBanner />
      <ExploreProducts />
      <NewArrivals />
      <Footer />
    </main>
  );
}
