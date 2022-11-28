import React, { useEffect } from "react"
import { useState } from 'react'
import ImageRender from "./ImageRender"
import "./index.scss"

const lineLength = 15

interface Props {
  trueText: string
  mixUpText: string
}

interface OutputItem {
  type: 'image' | 'text'

}

export default function Render(props: Props) {
  const [outputs, setOutputs] = useState<any[]>([])
  useEffect(() => {
    // 按照lineLength和换行符分割输入文本，并将trueText转换为图片，和mixUpText共同放入outputs
    const trueText = props.trueText
    const mixUpText = props.mixUpText
    const trueTextLength = trueText.length
    const mixUpTextLength = mixUpText.length
    const trueTextLines = Math.ceil(trueTextLength / lineLength) + trueText.split(/\r/).length - 1
    const mixUpTextLines = Math.ceil(mixUpTextLength / lineLength) + mixUpText.split(/\r/).length - 1
    const lines = Math.max(trueTextLines, mixUpTextLines)
    const curOutputs:any[] = []
    for (let i = 0; i < lines; i++) {
      // 跳过超出长度的部分
      if (i * lineLength < trueTextLength) {
        const trueTextLine = trueText.slice(i * lineLength, Math.min(trueTextLength, (i + 1) * lineLength))
        curOutputs.push({
          type: 'image',
          text: trueTextLine,
          fontColor: 'white'
        })
      }
      // 跳过超出长度的部分
      if (i * lineLength < mixUpTextLength) {
        const mixUpTextLine = mixUpText.slice(i * lineLength, Math.min(mixUpTextLength, (i + 1) * lineLength))
        curOutputs.push({
          type: 'image',
          text: mixUpTextLine,
          fontColor: 'black',
        })
      }
    }
    setOutputs(curOutputs)
  }, [props.mixUpText, props.trueText])
  return (
    <div id='output'>
      {outputs.map((item, index) => {
        switch (item.type) {
          case 'image': return <ImageRender key={index} text={item.text} backgroundColor='transparent' fontColor={item.fontColor} fontSize={20}/>
          case 'text': return <p key={index} className='output--text'>{item.text}</p>
        }
      })}
    </div>
  )
}