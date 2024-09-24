<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { listOfItems } from '../components/library'
import { tabsConfig } from './data'

const tabName = computed(() => useRoute().query.type)

const listOfCards = [
  {
    title: 'Advanced Card',
    subtitle: 'Card subtitle',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  },
  {
    title: 'Advanced Card',
    subtitle: 'Card subtitle',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  },
  {
    title: 'Advanced Card',
    subtitle: 'Card subtitle',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  },
]
</script>

<template>
  <Tabs v-if="tabName" :value="tabName">
    <TabList>
      <Tab v-for="tab in tabsConfig" :key="tab.name" :value="tab.name" as="div" class="flex align-items-center gap-2">
        <i :class="tab.icon"></i>
        <span class="font-bold whitespace-nowrap">{{ tab.label }}</span>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabsConfig" :value="tab.name" :key="tab.name">
        <listOfItems :itemsData="tab.items" />
      </TabPanel>
    </TabPanels>
  </Tabs>

  <div>
    <Card
      v-for="card in listOfCards"
      :key="card.title"
      class="card__props"
      style="
        width: 25rem;
        overflow: hidden;
        width: 380px;
        height: 530px;
        display: flex;
        margin-top: 8rem;
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      "
    >
      <template #header> </template>
      <template #title>{{ card.title }}</template>
      <template #subtitle>{{ card.subtitle }}</template>
      <template #content>
        <p class="m-0">
          {{ card.content }}
        </p>
      </template>
    </Card>
  </div>
</template>
