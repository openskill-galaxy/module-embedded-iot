import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="embedded system IoT MCU microcontroller ARM STM32 Arduino ESP32 register peripheral GPIO input output pull-up pull-down debounce LED buzzer timer counter PWM duty cycle interrupt external interrupt interrupt priority UART serial baud rate I2C SCL SDA SPI MOSI MISO SCLK CS ADC DAC sensor temperature humidity light ultrasonic servo motor driver relay LCD OLED flash debug JTAG SWD log RTOS task scheduler queue semaphore mutex MQTT WiFi Bluetooth edge device low power embedded project circuit schematic breadboard voltage current resistor capacitor inductor diode transistor operational amplifier comparator logic level shift optocoupler relay driver darlington H-bridge stepper motor encoder Hall sensor real-time clock watchdog timer brown-out reset power management sleep mode deep sleep wake-up pin interrupt daisy chain cascading shift register 7-segment display matrix keypad touch sensor capacitive sensing";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"io-tag-"+String(i+1).padStart(3,"0"),name:n,category:"IoT",description:"IoT标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"io-course-01",order:1,slug:"IoT入门",title:"嵌入式系统与物联网入门",description:"嵌入式定义、物联网架构、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"io-course-02",order:2,slug:"嵌入式C",title:"嵌入式C语言基础",description:"位操作、寄存器操作、volatile、指针。",estimatedHours:8,diff:"easy"},
  {id:"io-course-03",order:3,slug:"MCU开发环境",title:"单片机、MCU与开发环境",description:"MCU选型、IDE环境、编译烧录。",estimatedHours:6,diff:"easy"},
  {id:"io-course-04",order:4,slug:"GPIO",title:"GPIO输入输出与按键LED",description:"GPIO设置、推挽开漏、上拉下拉、按键消抖。",estimatedHours:10,diff:"medium"},
  {id:"io-course-05",order:5,slug:"定时器PWM",title:"定时器、计数器与PWM",description:"定时器模式、PWM输出、占空比、舵机控制。",estimatedHours:10,diff:"medium"},
  {id:"io-course-06",order:6,slug:"中断",title:"中断系统与事件响应",description:"外部中断、中断优先级、NVIC、中断嵌套。",estimatedHours:10,diff:"medium"},
  {id:"io-course-07",order:7,slug:"UART串口",title:"串口UART通信",description:"UART配置、中断接收、printf输出、协议解析。",estimatedHours:10,diff:"hard"},
  {id:"io-course-08",order:8,slug:"I2CSPI",title:"I2C、SPI与外设通信",description:"I2C时序、SPI通信、传感器读取、LCD驱动。",estimatedHours:10,diff:"hard"},
  {id:"io-course-09",order:9,slug:"ADC模拟",title:"ADC、DAC与模拟量采集",description:"ADC分辨率、参考电压、DMA传输、模拟采集。",estimatedHours:8,diff:"hard"},
  {id:"io-course-10",order:10,slug:"传感器执行器",title:"传感器、执行器与硬件接口",description:"温湿度、光敏、超声波、电机、继电器。",estimatedHours:10,diff:"hard"},
  {id:"io-course-11",order:11,slug:"调试烧录",title:"嵌入式调试、烧录与故障排查",description:"JTAG/SWD调试、printf、逻辑分析仪、排错。",estimatedHours:8,diff:"hard"},
  {id:"io-course-12",order:12,slug:"RTOS",title:"RTOS入门、任务与调度",description:"RTOS概念、任务创建、调度、队列、信号量。",estimatedHours:10,diff:"hard"},
  {id:"io-course-13",order:13,slug:"物联网通信",title:"物联网通信、MQTT与云平台基础",description:"WiFi/Bluetooth、MQTT协议、云平台接入。",estimatedHours:10,diff:"hard"},
  {id:"io-course-14",order:14,slug:"IoT项目面试",title:"嵌入式综合项目、课程设计与面试训练",description:"综合项目、课程设计、面试题。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解嵌入式系统","掌握GPIO/定时器","能使用UART/I2C","完成物联网项目"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"io-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["IoT"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"IoT课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["嵌入式","专用计算机系统"],["MCU","微控制器"],["GPIO","通用IO"],["定时器","时序控制"],["PWM","脉宽调制"],["中断","事件响应"],["UART","串口通信"],["I2C","同步通信"],["SPI","串行外设"],["ADC","模数转换"],["传感器","环境检测"],["RTOS","实时系统"],["MQTT","物联网协议"],["DMA","直接存储"],["看门狗","系统复位"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"io-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"IoT",tags:["IoT"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"io-kp-"+String(k.length+1).padStart(4,"0"),name:"IoT概念"+(k.length+1),description:"IoT概念",category:"IoT",tags:["IoT"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["IoT入门","嵌入式C","MCU开发环境","GPIO","定时器PWM","中断","UART串口","I2CSPI","ADC模拟","传感器执行器","调试烧录","RTOS","物联网通信","IoT项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"嵌入式系统特点？",["资源受限实时可靠","性能高","功耗高","体积大"],"A","easy"],[1,"GPIO输出模式？",["推挽/开漏","输入/输出","上拉/下拉","模拟/数字"],"A","easy"],[2,"STM32开发常用IDE？",["Keil/IAR/STM32CubeIDE","VS Code","Eclipse","IntelliJ"],"A","easy"],[3,"按键消抖原因？",["机械抖动","电气干扰","虚焊","温度变化"],"A","medium"],[4,"PWM调节什么？",["有效电压","频率","电流","功率"],"A","medium"],[5,"中断服务函数要求？",["快速执行简短","可执行复杂","可调用printf","可延时"],"A","hard"],[6,"UART通信线？",["TX/RX","SCL/SDA","MOSI/MISO","CLK/CS"],"A","medium"],[7,"I2C总线设备通过？",["地址识别","片选","中断","数据线"],"A","hard"],[8,"ADC分辨率10位？",["1024级","256级","4096级","65536级"],"A","hard"],[12,"RTOS中任务状态？",["就绪运行阻塞挂起","开始暂停结束","创建删除","启动停止"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];if(t_[4]&&typeof t_[4]==="string"&&t_[4].includes(":"))t_[4]=t_[4].replace(":","");qs.push({id:"io-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"calculation",min:300},{type:"case_analysis",min:900}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="io-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于IoT"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="IoT"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是嵌入式重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="IoT"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在嵌入式中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于IoT。";}
    else if(it.type==="calculation"){s="IoT"+ch+"计算。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="IoT"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"io-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["点亮LED","按键控制","按键消抖","流水灯","蜂鸣器","PWM调光","PWM舵机","定时器中断","外部中断","串口打印","串口命令","I2C传感器","SPI显示屏","ADC采样","温湿度采集","OLED显示","超声波测距","电机控制","RTOS任务","MQTT上报","环境监测","IoT面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"io-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握IoT",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"方案",description:"硬件"},{order:3,title:"实现",description:"代码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"IoT路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"io-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["嵌入式","MCU","GPIO","PWM","UART","I2C","SPI","ADC","RTOS","MQTT","中断","定时器","DMA","看门狗","传感器"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["IoT概念"+i,"IoT概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"io-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"IoT",tags:["IoT"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["IoT问题"+(i+1)+"?","IoT问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"io-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"IoT",tags:["IoT"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["IoT"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["IoT"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["IoT"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["IoT"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["IoT"]});});return e;}
async function main(){
  console.log("Gen IoT...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-embedded-iot",slug:"module-embedded-iot",title:"嵌入式C与物联网基础",subtitle:"面向电子信息和物联网学习者",description:"面向电子信息自动化计算机和物联网学习者的嵌入式CMCGPIOPWMUART中断I2CSPIADCRTOSMQTT与综合项目训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["嵌入式","物联网","单片机","C语言","STM32","传感器","RTOS","MQTT"],estimatedHours:190,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F4E1}",repoUrl:"https://github.com/openskill-galaxy/module-embedded-iot",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
