<template>
  <main>
    <FeatureRecommended />
    <NewGamesSection />
    <NewsSection />
    <SpecialOffersSection />
    <PopularStreamsSection />
  </main>
</template>

<script>
import FeatureRecommended from "@/components/global/FeatureRecommended";
import NewGamesSection from "@/components/NewGamesSection";
import NewsSection from "@/components/NewsSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import PopularStreamsSection from "@/components/PopularStreamsSection";
export default {
  data() {
    return {};
  },
  components: {
    FeatureRecommended,
    NewGamesSection,
    NewsSection,
    SpecialOffersSection,
    PopularStreamsSection
  },
};
</script>

<style>
</style>