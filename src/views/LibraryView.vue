<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { listOfItems } from '../components/library'

const tabName = computed(() => useRoute().query.type)

const catalogues = [
  {
    id: 1,
    category: 'Math',
    name: 'Algebra II',
    status: 'not started',
    rating: 4.5,
    childrenNumber: 3,
    grandChildrenNumber: 342,
    favourite: false,
  },
  {
    id: 2,
    category: 'English',
    name: 'Shakespeare Sonnets',
    status: 'completed',
    rating: 4.8,
    childrenNumber: 1,
    grandChildrenNumber: 123,
    favourite: true,
  },
  {
    id: 3,
    category: 'Physics',
    name: 'Quantum Mechanics',
    status: 'learning',
    rating: 4.2,
    childrenNumber: 2,
    grandChildrenNumber: 234,
    favourite: false,
  },
  {
    id: 4,
    category: 'Biology',
    name: 'Human Anatomy',
    status: 'completed',
    rating: 4.9,
    childrenNumber: 1,
    grandChildrenNumber: 123,
    favourite: true,
  },
  {
    id: 5,
    category: 'History',
    name: 'World War II',
    status: 'not started',
    rating: 4.1,
    childrenNumber: 3,
    grandChildrenNumber: 342,
    favourite: false,
  },
  {
    id: 6,
    category: 'Chemistry',
    name: 'Organic Chemistry',
    status: 'learning',
    rating: 4.7,
    childrenNumber: 2,
    grandChildrenNumber: 234,
    favourite: false,
  },
]

const sets = [
  {
    id: 1,
    category: 'Math',
    name: 'Logic statements and truth tables',
    status: 'not started',
    rating: 4.5,
    grandChildrenNumber: 342,
    favourite: false,
    parents: ['Algebra II', 'Quantum Mechanics'],
  },
  {
    id: 2,
    category: 'English',
    name: 'Sonnet 18',
    status: 'completed',
    rating: 4.8,
    grandChildrenNumber: 123,
    favourite: true,
    parents: ['Shakespeare Sonnets'],
  },
]

const tabsConfig = [
  {
    label: 'Flashcard sets',
    name: 'flashcard',
    icon: 'pi pi-credit-card',
    items: sets,
  },
  {
    label: 'Catalogues',
    name: 'catalogue',
    icon: 'pi pi-folder',
    items: catalogues,
  },
  {
    label: 'Learning paths',
    name: 'learning-path',
    icon: 'pi pi-compass',
    items: [],
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
</template>
