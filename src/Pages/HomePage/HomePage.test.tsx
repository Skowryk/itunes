import {
  cleanup,
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent
} from 'tests/utils'
import { HomePage } from './HomePage'
import { entries } from 'mocks/itunes'

beforeEach(() => {
  render(<HomePage />)
})

afterEach(() => {
  cleanup()
})

describe('HomePage', () => {
  it('should render headline, search box and be in loading state', () => {
    expect(screen.getByText('iTunes Store: Top Albums')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Filter tunes...')).toBeInTheDocument()
    expect(screen.getByText('Loading tunes...')).toBeInTheDocument()
  })

  it('should fetch data and display it', async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Loading tunes...')
    )
    entries.forEach((entry) => {
      expect(screen.queryByText(entry.title.label)).toBeDefined()
    })
  })

  it('should search for specific entry and display only it', () => {
    const searchEntry =
      'Top Gun: Maverick (Music from the Motion Picture) - Lorne Balfe, Harold Faltermeyer, Lady Gaga & Hans Zimmer'
    fireEvent.change(screen.getByTestId('textbox'), {
      target: { value: 'Top gun' }
    })
    expect(screen.getByText(searchEntry)).toBeDefined()
    screen.debug()
    entries
      .filter((entry) => entry.title.label !== searchEntry)
      .forEach((entry) => {
        expect(screen.queryByText(entry.title.label)).not.toBeInTheDocument()
      })
  })
})
