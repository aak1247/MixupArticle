import { useState } from "react";
import logo from "@/assets/logo.png";
import styles from "./index.module.scss";
import Render from "@/components/renderer";
import { Button, Input } from "antd/es";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
const { TextArea } = Input;

export default function Home() {
  const [trueText, setTrueText] = useState("");
  const [mixUpText, setMixUpText] = useState("");
  const doGenerate = () => {
    // 生成混淆文本
  };
  const onTrueTextChange = (e: any) => {
    setTrueText(e.target.value);
  };
  const onMixUpTextChange = (e: any) => {
    setMixUpText(e.target.value);
  };

  const copyResult = () => {
    const content = document.getElementById("output")?.innerHTML;
    if (!content) return
    const blob = new Blob([content], { type: "text/html" });
    const richTextInput = new ClipboardItem({ "text/html": blob });
    navigator.clipboard.write([richTextInput]);
  };

  // not using
  const pasteInput = () => {
    const img = {src: ''}
    navigator.clipboard.read().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (!data[i].types.includes("image/png")) {
          // Clipboard does not contain image data
        } else {
          data[i].getType("image/png").then((blob) => {
              img.src = URL.createObjectURL(blob);
          });
        }
      }
    })
  }

  return (
    <div className={styles.app}>
      <h1>文章混淆工具</h1>
      <pre>
        使用方法：
        将真实的文本输入左边的输入框，将用来混淆的文本输入右边的输入框，下会自动生成图片表示的混淆结果。其中，真实文本和混淆文本各行放置，真实文本为白色字体，混淆文本的黑色字体。
        点击复制，粘贴到公众号，然后
      </pre>
      <section></section>
      <header>
        <label className={styles.label}>真实文本</label>
        <TextArea rows={12} showCount onChange={onTrueTextChange} />
        <label className={styles.label}>混淆文本</label>
        <TextArea rows={12} showCount onChange={onMixUpTextChange} />
      </header>
      <main>
        <Button onClick={copyResult}>复制</Button>
        <p>混淆结果</p>
        <Render trueText={trueText} mixUpText={mixUpText} />
      </main>
    </div>
  );
}
