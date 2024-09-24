<script setup lang="ts">
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Card from 'primevue/card'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'

import { mainHubConfig } from './data'
</script>

<template>
  <div class="custom-container">
    <h1>Hello Kinga! 🤟</h1>
    <div v-if="mainHubConfig" class="sections-container">
      <div class="section" v-for="section in mainHubConfig">
        <div class="flex justify-content-between align-items-end">
          <h2>
            <span class="font-light">{{ section.category }}</span> {{ section.label }}
          </h2>
          <div class="flex gap-4" v-if="section.items.length > 0 && section.category === 'My'">
            <IconField>
              <InputText
                :placeholder="`Search for ${section.label.toLocaleLowerCase()}...`"
                type="text"
                class="search-bar"
              />
              <InputIcon class="pi pi-search" />
            </IconField>
            <a href="#" class="flex gap-2 align-items-center">View all <i class="pi pi-arrow-right"></i> </a>
          </div>
        </div>
        <div class="flex gap-2 carousel-wrapper">
          <Carousel
            :value="section.items"
            :numVisible="3"
            :numScroll="2"
            :showNavigators="false"
            indicatorsContentClass="custom-dot-indicators"
          >
            <template #item="slotProps">
              <a href="#">
                <Card :title="slotProps.data.name">
                  <template #content>
                    <div class="flex gap-3">
                      <div class="border-round-lg placeholder-image"></div>
                      <div class="flex flex-column gap-3 w-8">
                        <div class="flex gap-3">
                          <h3>{{ slotProps.data.name }}</h3>
                          <Tag class="w-max" :value="`#${slotProps.data.category}`" />
                        </div>
                        <p>{{ slotProps.data.description }}</p>
                        <div
                          v-if="slotProps.data.author && section.category !== 'My'"
                          class="flex gap-2 align-items-center"
                        >
                          <Avatar
                            :image="slotProps.data.authorImage"
                            shape="circle"
                            size="small"
                            class="border-1 border-surface-100"
                          />
                          <span class="text-sm">{{ slotProps.data.author }}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </Card>
              </a>
            </template>

            <template #empty>
              <Card class="pc-card">
                <template #content>
                  <h3>No items found</h3>
                  <p>Create a new one by clicking plus icon 👉</p>
                </template>
              </Card>
            </template>
          </Carousel>
          <Card v-if="section.category === 'My'" class="custom-carousel-item">
            <template #content>
              <!-- <div class="flex flex-column align-items-center gap-2"> -->
              <Button icon="pi pi-plus" rounded />
              <!-- <p class="text-center text-sm">Add new {{ section.name }}</p>
              </div> -->
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .sections-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .section {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .search-bar {
      width: 15vw;
      border: none !important;
      border-bottom: 1px solid $MAIN_BORDER !important;
      background-color: transparent !important;
    }

    .carousel-wrapper .p-carousel {
      width: 70vw;
    }

    .custom-carousel-item {
      align-items: center;
      padding: 1rem;

      border: 3px dashed $MAIN_BORDER !important;
      background-color: transparent !important;
    }

    .pc-card {
      margin: 1rem;

      height: 200px;
      display: flex;
      justify-content: center;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;

      transition: 0.1s ease;
      &:hover {
        border-bottom: 5px solid $MAIN_BORDER;
      }

      h3 {
        color: $WHITE;
        font-size: 20px;
        font-weight: 600;
      }

      p {
        opacity: 0.8;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .placeholder-image {
        width: 100px;
        height: 100px;
        background-color: $MAIN_BORDER;
        border-radius: 50%;
      }
    }
  }
}
</style>
