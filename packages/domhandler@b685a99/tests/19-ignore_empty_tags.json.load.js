montageDefine("b685a99","tests/19-ignore_empty_tags.json",{exports:{name:"Ignore empty tags (xml mode)",options:{handler:{},parser:{xmlMode:!0}},html:"<link>text</link>",expected:[{type:"tag",name:"link",attribs:{},children:[{data:"text",type:"text"}]}]}});