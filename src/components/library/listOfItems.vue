<script lang="ts" setup>
import DataView from 'primevue/dataview'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton'
import Chip from 'primevue/chip'

import { LibraryItem } from './types'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    itemsData: LibraryItem[]
  }>(),
  {},
)

const items = ref(props.itemsData)

const getSeverity = (item: LibraryItem) => {
  switch (item.status) {
    case 'completed':
      return 'success'

    case 'not started':
      return 'warn'

    case 'learning':
      return 'danger'

    default:
      return null
  }
}
</script>

<template>
  <div class="card">
    <DataView :value="items" paginator :rows="5" sortField="rating" :sortOrder="-1">
      <template #header>
        <div class="flex flex-row justify-content-center align-items-center p-5">
          <Button icon="pi pi-plus" size="large" severity="secondary" rounded />
        </div>
      </template>
      <template #empty>
        <div class="flex flex-column justify-content-center align-items-center p-5">
          <span class="font-semibold">No items found</span>
          <span>Create a new one by clicking plus icon</span>
        </div>
      </template>
      <template #list="slotProps">
        <div class="flex flex-column">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div
              class="flex flex-column sm:flex-row sm:align-items-center p-6 gap-4"
              :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
            >
              <div class="md:w-40 relative">
                <img class="block xl:block mx-auto border-round w-full" src="https://placehold.co/300x200/000000/FFF" />
                <div class="dark:bg-surface-900 absolute rounded-border" style="left: 4px; top: 4px">
                  <Tag :value="item.status" :severity="getSeverity(item)"></Tag>
                </div>
              </div>
              <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-6">
                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                  <div>
                    <span class="font-medium text-500 dark:text-500 text-sm">#{{ item.category }}</span>
                    <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                  </div>
                  <div class="flex flex-row gap-2">
                    <Chip v-for="parent in item.parents" :key="parent" :label="parent" />
                  </div>
                  <div class="bg-surface-100 p-1" style="border-radius: 30px">
                    <div
                      class="bg-surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                      style="
                        border-radius: 30px;
                        box-shadow:
                          0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                          0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                      "
                    >
                      <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-8">
                  <div v-if="item.childrenNumber" class="flex flex-column md:align-items-end gap-2">
                    <span class="text-xl font-semibold">{{ item.childrenNumber }} sets</span>
                    <span class="font-normal">{{ item.grandChildrenNumber }} flashcards</span>
                  </div>
                  <div v-else>
                    <span class="text-xl font-semibold">{{ item.grandChildrenNumber }} flashcards</span>
                  </div>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <ToggleButton
                      v-model="item.favourite"
                      onLabel="Liked"
                      offLabel="Not liked"
                      onIcon="pi pi-heart-fill"
                      offIcon="pi pi-heart"
                      outlined
                    ></ToggleButton>
                    <Button
                      icon="pi pi-pencil"
                      label="Edit"
                      class="flex-auto md:flex-initial whitespace-nowrap"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>
