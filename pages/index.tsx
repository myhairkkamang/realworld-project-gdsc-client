import HomeBanner from "@/components/home/home-banner";
import HomeTagBox from "@/components/home/home-tagBox";
import HomePagination from "@/components/home/home-pagination";
import HomeFeedToggle from "@/components/home/home-feedToggle";
import HomeArticlePreview from "@/components/home/home-articlePreview";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <HomeFeedToggle />
              <HomeArticlePreview />
              <HomePagination />
            </div>
            <HomeTagBox />
          </div>
        </div>
      </div>
    </>
  );
}
