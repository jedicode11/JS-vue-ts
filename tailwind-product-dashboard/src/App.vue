<template>
  <div class="app-container">
    <aside class="sidebar">
      <img src="/img/logo.png" alt="" class="logo" />
      <ul v-for="group in sidebar" class="menu-group">
        <li v-for="item in group">
          <a href="#" class="menu-link">
            <span class="menu-icon">
              <Component :is="item.icon" class="icon" />
            </span>
            <span class="menu-text">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </aside>

    <main class="main-content">
      <div class="header">
        <h1 class="header-title">Products</h1>
        <p class="header-description">
          Let's grow your business! Create your product and upload it here.
        </p>
      </div>

      <ul class="status-bar">
        <li v-for="item in status">
          <button class="status-button">
            <span class="status-icon">
              <Component :is="item.icon" class="icon" />
            </span>
            <span class="status-text">{{ item.name }}</span>
            <span class="status-indicator"></span>
          </button>
        </li>
      </ul>

      <table class="product-table">
        <thead>
          <tr class="table-header-row">
            <td class="table-header-cell">
              <div class="table-header-content">
                <input
                  type="checkbox"
                  class="checkbox"
                  indeterminate="indeterminate"
                />
                <span class="table-header-text">Product Name</span>
              </div>
            </td>
            <td class="table-header-cell">Pricing</td>
            <td class="table-header-cell">Downloaded</td>
            <td class="table-header-cell">Rating</td>
            <td class="table-header-cell">Platforms</td>
            <td class="table-header-cell">
              <span class="filter-icon">
                <FilterIcon class="icon" />
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" class="table-row">
            <td class="table-cell">
              <input
                type="checkbox"
                class="checkbox"
              />
              <img
                :src="product.imageUrl"
                alt=""
                class="product-image"
              />
              <div class="product-info">
                <a href="#" class="product-name">{{ product.name }}</a>
                <div class="product-category">{{ product.category }}</div>
              </div>
            </td>
            <td class="table-cell">${{ product.price }}</td>
            <td class="table-cell">{{ product.downloaded }}</td>
            <td class="table-cell">
              <span class="product-rating">{{ product.rating }}</span>
              <span class="product-rating-suffix">/5</span>
            </td>
            <td class="table-cell">
              <div class="platform-icons">
                <a
                  href="#"
                  v-for="icon in product.platformIcons"
                  class="platform-icon"
                >
                  <Component :is="icon" class="icon" />
                </a>
              </div>
            </td>
            <td class="table-cell">
              <span class="created-at">
                {{ product.createdAt }}
              </span>
              <div class="actions">
                <button class="edit-button">
                  <PencilIcon class="icon" />
                </button>
                <button class="delete-button">
                  <TrashIcon class="icon" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button class="pagination-button">
          <ChevronLeftIcon class="pagination-icon" />
        </button>
        <button
          v-for="i in 6"
          class="pagination-number"
          :class="i === 1 ? 'active' : ''"
        >
          {{ i }}
        </button>
        <button class="pagination-button">
          <ChevronRightIcon class="pagination-icon" />
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import OverviewIcon from "./icons/overview.svg";
import ShoppingBagIcon from "./icons/shopping-bag.svg";
import GraphIcon from "./icons/graph.svg";
import CalendarIcon from "./icons/calendar.svg";
import WalletIcon from "./icons/wallet.svg";
import FileIcon from "./icons/file.svg";
import ChatIcon from "./icons/chat.svg";
import GroupChatIcon from "./icons/group-chat.svg";
import SettingsIcon from "./icons/settings.svg";
import LogoutIcon from "./icons/logout.svg";
import PlusIcon from "./icons/plus.svg";
import LayersIcon from "./icons/layers.svg";
import DraftIcon from "./icons/draft.svg";
import InvisibleIcon from "./icons/invisible.svg";
import RejectedIcon from "./icons/rejected.svg";
import MailIcon from "./icons/mail.svg";
import FilterIcon from "./icons/filter.svg";
import FigmaIcon from "./icons/figma.svg";
import SketchIcon from "./icons/sketch.svg";
import AIIcon from "./icons/ai.svg";
import PencilIcon from "./icons/pencil.svg";
import TrashIcon from "./icons/trash.svg";
import ChevronLeftIcon from "./icons/chevron-left.svg";
import ChevronRightIcon from "./icons/chevron-right.svg";

const sidebar = [
  [
    { name: "Overview", icon: OverviewIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Analytics", icon: GraphIcon },
    { name: "Schedule", icon: CalendarIcon },
    { name: "Payout", icon: WalletIcon },
    { name: "Statements", icon: FileIcon },
  ],
  [
    { name: "Help", icon: ChatIcon },
    { name: "Community", icon: GroupChatIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const status = [
  { name: "Published", icon: LayersIcon },
  { name: "Draft", icon: DraftIcon },
  { name: "Hidden", icon: InvisibleIcon },
  { name: "Rejected", icon: RejectedIcon },
  { name: "Under Review", icon: MailIcon },
];

const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl: "/img/organic-landing-page.png",
    price: 20,
    downloaded: 793,
    rating: 4.9,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl: "/img/traffic-landing-page.png",
    price: 24,
    downloaded: 34,
    rating: 4.4,
    platformIcons: [FigmaIcon, AIIcon],
    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl: "/img/pos-dashboard.png",
    price: 16,
    downloaded: 896,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl: "/img/gallery-page.png",
    price: 38,
    downloaded: 194,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl: "/img/wfh-landing-page.png",
    price: 22,
    downloaded: 404,
    rating: 4.3,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/12/21",
  },
];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  min-height: 100vh;
  font-family: 'sans-serif';
  color: #333;
  background-color: #f5f7fa;
}

.sidebar {
  padding: 2rem;
  width: 16rem;
  border-right: 1px solid #e2e8f0;
}

.logo {
  width: 4rem;
}

.menu-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  padding: 2rem 0;
}

.menu-link:hover {
  color: #4a90e2;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
}

.header-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.header-description {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-top: 0.5rem;
}

.status-bar {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.status-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  position: relative;
}

.status-button:hover {
  color: #4a90e2;
}

.status-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}

.status-text {
  font-weight: 500;
}

.status-indicator {
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #4a90e2;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.status-button:hover .status-indicator {
  transform: scaleX(1);
}

.product-table {
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
}

.table-header-row {
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #e2e8f0;
}

.table-header-cell {
  padding: 1rem 2rem;
}

.table-header-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  width: 1rem;
  height: 1rem;
  color: #4a90e2;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.table-header-text {
  display: inline-block;
}

.table-cell {
  display: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
}

.product-image {
  width: 70%;
  height: 70%;
  object-fit: cover;
  border: 2px solid #dbebff;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.product-name:hover {
  color: #4a90e2;
}

.product-category {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
}

.product-rating {
  font-weight: 500;
}

.product-rating-suffix {
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
}

.platform-icons {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
}

.platform-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #f5f7fa;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.platform-icon:hover {
  background-color: #e2e8f0;
}

.created-at {
  display: inline-block;
  width: 4rem;
  color: #333;
  transition: color 0.3s ease-in-out;
}

.actions {
  display: none;
  gap: 0.5rem;
}

.table-row:hover .actions {
  display: flex;
  align-items: center;
}

.edit-button,
.delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #f5f7fa;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.edit-button:hover,
.delete-button:hover {
  background-color: #e2e8f0;
}

/* Pagination Styles */
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-top: 1rem;
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.pagination-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #333;
  transition: color 0.3s ease-in-out;
}

.pagination-button:hover .pagination-icon {
  color: #4a90e2;
}

.pagination-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.pagination-number.active {
  background-color: #4a90e2;
  color: #fff;
  cursor: default;
}

.pagination-number:not(.active):hover {
  background-color: #e2e8f0;
  color: #4a90e2;
}
</style>
