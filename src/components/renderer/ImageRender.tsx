import React, { useEffect } from "react";

interface Props {
  text: string;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
}

export default function ImageRender(props: Props) {
  const [imageSrc, setImageSrc] = React.useState<string>("");
  useEffect(() => {
    // 判断是否有换行，如果有同时渲染两行
    const lines = props.text.split(/\r|\n/);
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    let width = context?.measureText(props.text).width * 2;
    // 画布宽度
    canvas.width = width;
    // 画布高度
    canvas.height = props.fontSize * lines.length;
    // 填充白色
    context.fillStyle = props.backgroundColor || "transparent";
    // 绘制文字之前填充白色
    context.fillRect(0, 0, canvas.width, canvas.height);
    // 设置字体
    context.font = props.fontSize + 'px "Microsoft YaHei"';
    // 设置水平对齐方式
    context.textAlign = "center";
    // 设置垂直对齐方式
    context.textBaseline = "middle";
    // 设置字体颜色
    context.fillStyle = props.fontColor || "#ffffff";
    // 绘制文字（参数：要写的字，x坐标，y坐标）
    lines.forEach((line, i) => {
      context?.fillText(line, i * width + width / 2, i * props.fontSize + props.fontSize / 2)
    })
    // 生成图片信息
    let dataUrl = canvas.toDataURL("image/png");
    setImageSrc(dataUrl);
  }, [props.text, props.backgroundColor, props.fontSize]);
  return <img src={imageSrc} className="output--image" />;
}
