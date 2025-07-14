import { contactType } from '@/type'
import Link from 'next/link'
import React from 'react'

function Contact({title,href,structureStyle,contentStyle ,onClick}:contactType) {
  return (
    <Link href={href} onClick={onClick} className={`transition ${structureStyle} ${contentStyle}`}>{title}</Link>
  )
}

export default Contact