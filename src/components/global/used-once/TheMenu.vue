<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Menu from 'primevue/menu'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const router = useRouter()

const userProfileImage = 'https://avatar.iran.liara.run/public'
const userName = 'Amy Elsner'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'My library',
    icon: 'pi pi-bookmark',
    items: [
      {
        label: 'Flashcard sets',
        icon: 'pi pi-credit-card',
        command: () => {
          router.push({ path: '/library', query: { type: 'flashcard' } })
        },
      },
      {
        label: 'Catalogues',
        icon: 'pi pi-folder',
        command: () => {
          router.push({ path: '/library', query: { type: 'catalogue' } })
        },
      },
      {
        label: 'Learning paths',
        icon: 'pi pi-compass',
        command: () => {
          router.push({ path: '/library', query: { type: 'learning-path' } })
        },
      },
    ],
  },
])

const menu = ref()
const profileMenuItems = ref([
  {
    label: 'Flashcards',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
    ],
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2,
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ],
  },
  {
    separator: true,
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu, root }">
        <a class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
            item.shortcut
          }}</span>
          <i
            v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <IconField>
            <InputText placeholder="Search for..." type="text" class="w-8rem sm:w-auto" />
            <InputIcon class="pi pi-search" />
          </IconField>

          <div>
            <Avatar :image="userProfileImage" shape="circle" @click="toggle" />

            <div class="card flex justify-center">
              <Menu ref="menu" id="overlay_menu" :model="profileMenuItems" :popup="true">
                <template #submenulabel="{ item }">
                  <span class="text-primary font-bold">{{ item.label }}</span>
                </template>

                <template #item="{ item, props }">
                  <a class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                  </a>
                </template>

                <template #end>
                  <div
                    class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"
                  >
                    <Avatar :image="userProfileImage" class="mr-2" shape="circle" />

                    <span class="inline-flex flex-column align-items-start">
                      <span class="font-bold">{{ userName }}</span>
                      <span class="text-sm">Student</span>
                    </span>
                  </div>
                </template>
              </Menu>
            </div>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss" scoped>
.p-avatar {
  cursor: pointer;
}
</style>
