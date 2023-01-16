import { httpClient } from 'API/httpClient'
import { useQuery } from '@tanstack/react-query'
import { ITunesResponse } from 'Types/itunes'

export enum QueryKeys {
  UseTunes = 'useTunes'
}

const fetchTunes = () =>
  httpClient.get<ITunesResponse>(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
  )

export const useTunes = () =>
  useQuery({ queryKey: [QueryKeys.UseTunes], queryFn: fetchTunes })
