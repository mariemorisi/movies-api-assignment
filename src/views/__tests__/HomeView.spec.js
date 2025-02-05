import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import MoviesList from '@/components/MoviesList.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import * as service from '@/services/movies-service'

describe('HomeView.vue', () => {
  const mockGetMoviesWithPosters = vi.spyOn(service, 'getMoviesWithPosters')

  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders the header with text "Movies"', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          MoviesList: false,
          PaginationControls: false,
        },
      },
    })

    const header = wrapper.find('h2')
    expect(header.exists()).toBe(true)
    expect(header.text()).toBe('Movies')
  })

  it('shows loader when loading is true', async () => {
    mockGetMoviesWithPosters.mockImplementation(() => new Promise(() => {}))

    const wrapper = mount(HomeView)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.home-view_loader').exists()).toBe(true)
  })

  it('shows error message when errorFetchingMovies is true', async () => {
    mockGetMoviesWithPosters.mockRejectedValue(new Error('Network Error'))

    const wrapper = mount(HomeView)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.home-view_error').exists()).toBe(true)
    expect(wrapper.find('.home-view_error').text()).toContain('Something went wrong')
  })

  it('displays MoviesList and PaginationControls when not loading and no error', async () => {
    mockGetMoviesWithPosters.mockResolvedValue({ items: [{ id: 1 }, { id: 2 }] })

    const wrapper = mount(HomeView)

    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(MoviesList).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationControls).exists()).toBe(true)
  })

  it('calls handlePageChange and updates currentPage on pagination event', async () => {
    mockGetMoviesWithPosters.mockResolvedValue({
      items: Array.from({ length: 30 }, (_, i) => ({ id: i })),
    })

    const wrapper = mount(HomeView)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.currentPage).toBe(1)

    const pagination = wrapper.findComponent(PaginationControls)
    await pagination.vm.$emit('onPageChange', 2)

    expect(wrapper.vm.currentPage).toBe(2)
  })
})
