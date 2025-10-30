import Script from 'next/script';
import React from 'react'
type AdsenseTypes = {
    pId: string;
}

const AdSense = ({pId}: AdsenseTypes) => {
  return (
    <Script
    async
    src=''
    crossOrigin='anonymous'
    strategy='afterInteractive'
    />
  )
}

export default AdSense
