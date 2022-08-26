import { Document, BLOCKS, MARKS, INLINES} from '@contentful/rich-text-types'
import {documentToReactComponents, Options} from '@contentful/rich-text-react-renderer'
import { ReactElement } from 'react'
import Link from '../atoms/Link'


export interface RichTextRendererProps {
  content?: Document,
}

const options : Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node,children)=><p className='my-3'>{children}</p>,
    [INLINES.HYPERLINK]: (node,children)=><Link href={node.data.uri} className='text-pink font-bold'>{children}</Link>,
  },
  renderMark: {
    [MARKS.BOLD]: (text)=><b className='font-bold'>{text}</b>,
    [MARKS.ITALIC]: (text)=><i className='italic'>{text}</i>,
    [MARKS.CODE]: (text)=><span className='font-mono bg-gray-400 p-1 rounded-sm'>{text}</span>,
    [MARKS.UNDERLINE]: (text)=><u className='underline'>{text}</u>,
  },
}

export const RichTextRenderer : React.FC<RichTextRendererProps> = (props) => {
  if(!props.content) return null
  return documentToReactComponents(props.content,options) as ReactElement
}