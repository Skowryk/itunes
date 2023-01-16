export type ITunesRecord = {
  id: {
    attributes: {
      'im:id': string
    }
  }
  category: {
    attributes: {
      'im:id': string
      label: string
      scheme: string
      term: string
    }
  }
  'im:artist': {
    label: string
    attributes: {
      href: string
    }
  }
  'im:image': [
    {
      label: string
      attributes: {
        height: string
      }
    }
  ]
  'im:name': {
    label: string
  }
  'im:price': {
    label: string
    attributes: {
      amount: string
      currency: string
    }
  }
  'im:releaseDate': {
    label: string
    attributes: {
      label: string
    }
  }
  rights: {
    label: string
  }
  title: {
    label: string
  }
}

export type ITunesResponse = {
  feed: {
    entry: ITunesRecord[]
    updated: {
      label: string
    }
  }
}
