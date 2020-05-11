import React from "react";
import { IOInput } from "./widgets/io_input";
import { algorithm } from "./libs";
import { BlockView } from "./widgets/block_view";
function App() {
  return (
    <>
      <BlockView title="char to code">
        <IOInput
          btnText="字符串 to 10进制"
          inputValue="成都"
          hander={(iv: string) => algorithm.char2code(iv, 10)}
        ></IOInput>
        <IOInput
          btnText="字符串 to 16进制"
          inputValue="成都"
          hander={(iv: string) => algorithm.char2code(iv, 16)}
        ></IOInput>
      </BlockView>

      <BlockView title="code to char">
        <IOInput
          btnText="10进制 to 字符串"
          inputValue="25104 37117"
          hander={(iv: string) => algorithm.code2char(iv, 10)}
        ></IOInput>
        <IOInput
          btnText="16进制 to 字符串"
          inputValue="6210 90fd"
          hander={(iv: string) => algorithm.code2char(iv, 16)}
        ></IOInput>
      </BlockView>
      
      <BlockView title="16进制转单浮点">
        <IOInput
          btnText="16进制 to 单浮点"
          inputValue="43290000"
          hander={(iv: string) => algorithm.hex2SingleFloatingPoint(iv)}
        ></IOInput>
      </BlockView>

      <BlockView title="负数与无符号位的转换">
        <IOInput
          btnText="负数 to 无符号位"
          inputValue="-2000"
          hander={(iv: string) => algorithm.negative2unsignedBit(Number(iv))}
        ></IOInput>
        <IOInput
          btnText="无符号位 to 负数"
          inputValue="4294965296"
          hander={(iv: string) => algorithm.unsignedBit2negative(Number(iv))}
        ></IOInput>
      </BlockView>
      
    </>
  );
}

export default App;
