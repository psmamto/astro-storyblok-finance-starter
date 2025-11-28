import { useStoryblokApi } from '@storyblok/astro'
import isPreview from './isPreview'

export async function getStory(slug = 'home', language) {
  // Mock story for build
  return {
    content: {
      body: []
    }
  }
}

export async function getLinks() {
  // Mock links for build
  return []
}

export async function getSiteSettings(language) {
  // Mock settings
  return {
    content: {
      logo: { filename: "/images/logo.png", alt: "Logo" },
      navigation: [],
      phone: "",
      email: "",
      company_description: ""
    }
  }
}

export async function getDatasource(slug) {
  // Mock datasource
  return {}
}

export async function getReportList(language) {
  return []
}

export async function getLanguagesCode() {
  return ['pl', 'en']
}
