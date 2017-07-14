<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <div class="widewrapper main">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <article class="blog-post">
              <header>
                <a id="__top"></a>
                <div class="lead-image">
                  <img src="../../../static/img/lambda.png" alt="" class="img-responsive">

                </div>
              </header>
              <div class="body">
                <h1>lambda</h1>
                <div class="meta">
                  <i class="fa fa-user"></i> pronull <i class="fa fa-calendar"></i>2017-07-03<i
                  class="fa fa-comments"></i><span class="data"><a href="#">3 Comments</a></span>
                </div>
                <a id="lambda_table"></a>
                <table>
                  <tr>
                    <th>接口</th>
                    <th>参数</th>
                    <th>反回类型</th>
                  </tr>
                  <tr>
                    <td>Predicate&ltT&gt</td>
                    <td>T</td>
                    <td>boolean</td>
                  </tr>
                  <tr>
                    <td>Consumer&ltT&gt</td>
                    <td>T</td>
                    <td>void</td>
                  </tr>
                  <tr>
                    <td>Function&ltT,R&gt</td>
                    <td>T</td>
                    <td>R</td>
                  </tr>
                  <tr>
                    <td>Supplier&ltT&gt</td>
                    <td>none</td>
                    <td>T</td>
                  </tr>
                  <tr>
                    <td>UnaryOperator&ltT&gt</td>
                    <td>T</td>
                    <td>boolean</td>
                  </tr>
                  <tr>
                    <td>BinaryOperator&ltT&gt</td>
                    <td>(T,T)</td>
                    <td>T</td>
                  </tr>
                </table>
                <hr>
                <a id="code001"></a>
                以上几个接口为java8内置接口,这里我试着用自己的接口实现了一下,可以发现,其实完全可以用自己的接口完成lambda表达式,
                代码如下:
                <pre>
                 {{codes.code001}}
                </pre>
                <pre>
                  {{codes.code002}}
                </pre>
                <pre>
                  {{codes.code003}}
                </pre>
                <p>
                  结果:true
                </p>
              </div>

              <hr>
              stream中常用的一些lambda方法:
              <ul>
                <li>filter(Predicate&ltT&gt)</li>
                <li>forEach(Consumer&ltT&gt)</li>
                <li>map(Function&ltT,R&gt)</li>
                <li>collect(Collectors.toList())</li>
                <li>collect(Collectors.toSet())</li>
              </ul>
              <br/>
              stream中一些不常用的lambda方法:
              <ul>
                <a id="code004"></a>
                <li>reduce(Predicate&ltT&gt):
                  <br/>这里介绍一下
                  <pre>
                    {{codes.code004}}
                  </pre>
                  <p>
                    结果:1	2	3	4	5	6	7	8	9	10<br>
                    12	3	4	5	6	7	8	9	10	<br>
                    1	2	-3	4	5	---6	7	-8	9	10	----
                  </p>
                </li>
                <a id="code005"></a>
                <li>flatMap(Function&lt? super T, ? extends Stream&lt? extends R>> mapper):
                  <br/>
                  <pre>
                    {{codes.code005}}
                  </pre>
                  <p>
                    结果:<br/>
                    原集合:	[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [], []]<br/>
                    flatMap后:	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210]
                  </p>
                </li>
              </ul>

              <hr/>
              <a id="code006"></a>
              接口的默认方法和静态方法:<br>
              接口:
              <pre>
                {{codes.code006}}
              </pre>
              实现类:
              <pre>
                {{codes.code007}}
              </pre>
              测试:
              <pre>
                {{codes.code008}}
              </pre>
              结果:<br/>
              class com.github.lambada.DefaultAndStaticFunctionImple<br/>
              xxx<br/>
              java.lang.Object

              <hr/>
              <a id="code009"></a>
              收集器:
              <pre>
                {{codes.code009}}
              </pre>
              自定义收集器:

              <hr/>
              并行流ParableStream:<br/>
              需要注意:<br/>
              1.并行流的reduce初始值必须满足结合后的结果不能改变比如加法reduce(0,(acc,x)->acc+x),任何数加0等于他本身
              乘法的初始值必须为1<br/>
              2.能重复将数据结构对半分解的性能要更好:<br>
              <ul>
                <li>性能好: ArrayList, 数组,IntStream.range等支持随机读取的,能被任意分解</li>
                <li>性能一般:HashSet, TreeSet等,不容易被分解</li>
                <li>性能差: LinkedList等链式结构的,对半分解太难了</li>
              </ul>
            </article>

            <!--分享-->
            <aside class="social-icons clearfix">
              <h3>Share on </h3>
              <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a
              href="#"><i class="fa fa-google"></i></a>
            </aside>

            <!--提交意见-->
            <!--<aside class="comments" id="comments">c
              <hr>

              <h2><i class="fa fa-comments"></i> 6 Comments</h2>

              <article class="comment">
                <header class="clearfix">
                  <img src="../../../static/img/avatar.png" alt="A Smart Guy" class="avatar">
                  <div class="meta">
                    <h3><a href="#">John Doe</a></h3>
                    <span class="date">
                                        24 August 2015
                                    </span>
                    <span class="separator">
                                        -
                                    </span>

                    <a href="#create-comment" class="reply-link">Reply</a>
                  </div>
                </header>
                <div class="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                </div>
              </article>

              <article class="comment reply">
                <header class="clearfix">
                  <img src="../../../static/img/avatar.png" alt="A Smart Guy" class="avatar">
                  <div class="meta">
                    <h3><a href="#">John Doe</a></h3>
                    <span class="date">
                                        24 August 2015
                                    </span>
                    <span class="separator">
                                        -
                                    </span>

                    <a href="#create-comment" class="reply-link">Reply</a>
                  </div>
                </header>
                <div class="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                </div>
              </article>

              <article class="comment ">
                <header class="clearfix">
                  <img src="../../../static/img/avatar.png" alt="A Smart Guy" class="avatar">
                  <div class="meta">
                    <h3><a href="#">John Doe</a></h3>
                    <span class="date">
                                        24 August 2015
                                    </span>
                    <span class="separator">
                                        -
                                    </span>

                    <a href="#create-comment" class="reply-link">Reply</a>
                  </div>
                </header>
                <div class="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                </div>
              </article>

              <article class="comment">
                <header class="clearfix">
                  <img src="../../../static/img/avatar.png" alt="A Smart Guy" class="avatar">
                  <div class="meta">
                    <h3><a href="#">John Doe</a></h3>
                    <span class="date">
                                        24 August 2015
                                    </span>
                    <span class="separator">
                                        -
                                    </span>

                    <a href="#create-comment" class="reply-link">Reply</a>
                  </div>
                </header>
                <div class="body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                </div>
              </article>
            </aside>-->
            <!--提交意见-->
            <!--<aside class="create-comment" id="create-comment">-->
              <!--<hr>-->

              <!--<h2><i class="fa fa-pencil"></i> Add Comment</h2>-->

              <!--<form action="#" method="get" accept-charset="utf-8">-->
                <!--<div class="row">-->
                  <!--<div class="col-md-6">-->
                    <!--<input type="text" name="name" id="comment-name" placeholder="Your Name"-->
                           <!--class="form-control input-lg">-->
                  <!--</div>-->
                  <!--<div class="col-md-6">-->
                    <!--<input type="email" name="email" id="comment-email" placeholder="Email"-->
                           <!--class="form-control input-lg">-->
                  <!--</div>-->
                <!--</div>-->

                <!--<input type="url" name="name" id="comment-url" placeholder="Website" class="form-control input-lg">-->

                <!--<textarea rows="10" name="message" id="comment-body" placeholder="Your Message"-->
                          <!--class="form-control input-lg"></textarea>-->

                <!--<div class="buttons clearfix">-->
                  <!--<button type="submit" class="btn btn-xlarge btn-clean-one">Submit</button>-->
                <!--</div>-->
              <!--</form>-->
            <!--</aside>-->
          </div>

          <!--右侧列表-->
          <aside class="col-md-4 blog-aside">
            <div class="aside-widget">
              <header>
                <h3>看看这里呗</h3>
              </header>
              <div class="body">
                <ul class="clean-list">
                  <li><a href="javascript:void(0)" @click="goToLambdaTable">lambda接口列表</a></li>
                  <li><a href="javascript:void(0)" @click="goToCode001">自定义接口替代java内置接口</a></li>
                  <li><a href="javascript:void(0)" @click="goToCode004">reduce接口</a></li>
                  <li><a href="javascript:void(0)" @click="goToCode005">flatMap接口</a></li>
                  <li><a href="javascript:void(0)" @click="goToCode006">接口的静态和默认方法</a></li>
                  <li><a href="javascript:void(0)" @click="goToCode009">收集器</a></li>
                </ul>
              </div>
            </div>

            <!--<div class="aside-widget">-->
              <!--<header>-->
                <!--<h3>Related Post</h3>-->
              <!--</header>-->
              <!--<div class="body">-->
                <!--<ul class="clean-list">-->
                  <!--<li><a href="">Blackor Responsive Theme</a></li>-->
                  <!--<li><a href="">Portfolio Bootstrap Template</a></li>-->
                  <!--<li><a href="">Clean Slider Template</a></li>-->
                  <!--<li><a href="">Clean - Responsive HTML5 Template</a></li>-->
                  <!--<li><a href="">Responsive Pricing Table</a></li>-->
                  <!--<li><a href="">Yellow HTML5 Template</a></li>-->
                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->

            <div class="aside-widget">
              <header>
                <h3>Tags</h3>
              </header>
              <div class="body clearfix">
                <ul class="tags">
                  <li><a href="javascript:void(0)">java8</a></li>
                  <li><a href="javascript:void(0)">lambda</a></li>
                  <li><a href="javascript:void(0)">新特性</a></li>
                  <li><a href="javascript:void(0)">函数式编程</a></li>
                </ul>
              </div>
            </div>
          </aside>
          <button class="btn btn-large btn-primary" type="button" id="__top_button" @click="goToTop">回到顶部</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'lambda',
    data(){
      return {
        tips0: `lambda`,
        codes: {},
      }
    },
    methods:{
      goToLambdaTable :function(){
        document.getElementById("lambda_table").scrollIntoView();
      },
      goToCode001:function(){
        document.getElementById("code001").scrollIntoView();
      },
      goToCode004:function(){
        document.getElementById("code004").scrollIntoView();
      },
      goToCode005:function(){
        document.getElementById("code005").scrollIntoView();
      },
      goToCode006:function(){
        document.getElementById("code006").scrollIntoView();
      },
      goToCode009:function(){
        document.getElementById("code009").scrollIntoView();
      },
      goToTop:function(){
        document.getElementById("__top").scrollIntoView();
      },
    },
    created: function () {
      this.codes['code001'] =
`
public interface IntPred<T> {
    boolean test(T value);
}`
      this.codes['code002'] =
`
public class IntTest<T>{
    private T t;

    public IntTest(T t) {
      this.t = t;
    }

    public boolean check(IntPred<T> predicate){
      return predicate.test(t);
    }
}`
      this.codes['code003'] =
`
public class TestIntPred {
    public static void main(String[] args) {
       IntTest<Integer> test = new IntTest(7);
       boolean result = test.check(x -> x > 5);
       System.out.println(result);
     }
}`
      this.codes['code004'] =
`
public class ReduceTest {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            list.add(i + "");
        }
        String result = list.stream().reduce("", (temp, str) -> temp + str + "\t");
        System.out.println(result);

        //用reduce生产一个option
        Optional<String> optional = list.stream().reduce((temp, str) -> temp + str + "\t");
        System.out.println(optional.get());

        //reduce的二级收集器(用于并发的时候,吧中间结果合并)
        String reduceResult = list.parallelStream().reduce("", (temp, str) -> {
            String ss = temp + str + "\t";
            return ss;
        }, (left, right) -> {
            return left+right+"-";
        });
        System.out.println(reduceResult);
    }
}`
      this.codes['code005'] =
`
public class FlatMapTest {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
          list.add(i + "");
        }
        List<String> list2 = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
          list.add(i+100 + "");
        }
        List<String> list3 = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
          list.add(i+200 + "");
        }
        List<List<String>> listAll = new ArrayList<>();
        listAll.add(list);
        listAll.add(list2);
        listAll.add(list3);
        System.out.println("原集合:\t"+listAll);
        List<String> result = listAll.stream().flatMap(subList -> subList.stream()).collect(Collectors.toList());
        System.out.println("flatMap后:\t"+result);
    }
}`
      this.codes['code006'] =
`
public interface DefaultAndStaticFunctionInterface {
    //默认方法
    default String getFunctionName() {
        System.out.println(this.getClass());
        return "xxx";
    }
    //静态方法
    static <T> T createBean(Supplier<T> supplier){
        return supplier.get();
    }
}`
      this.codes['code007'] =
`
public class DefaultAndStaticFunctionImple implements DefaultAndStaticFunctionInterface {

}`
      this.codes['code008'] =
`
public class DefaultFunctionInterfaceTest {
    public static void main(String[] args) {

        //一般的接口定义的方法需要被实现,而默认方法可以不实现
        DefaultAndStaticFunctionInterface  defaultFunctionImple = new  DefaultAndStaticFunctionImple();
        System.out.println(defaultFunctionImple.getFunctionName());

        //静态方法可以直接使用
        Class t = DefaultAndStaticFunctionInterface.createBean(Object::new).getClass();
        System.out.println(t.getName());
    }
}`
      this.codes['code009']=
`
public class CollectorTest {
    public static void main(String[] args) {

        List<String> list = new ArrayList();
        for (int i = 1; i <= 10; i++) {
            list.add(i + "");
        }
        //转成指定集合类
        Set<String> set = list.stream().collect(toCollection(TreeSet::new));
        System.out.println(set);//[1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

        //数据分块
        Map<Boolean, List<String>> partitionMap = list.stream()
                .collect(partitioningBy(string -> Integer.valueOf(string) < 4));
        System.out.println(partitionMap);//{false=[4, 5, 6, 7, 8, 9, 10], true=[1, 2, 3]}

        //数据分组1.1个收集器,按字符串分组
        Map<String, List<String>> groupByMap = list.stream().collect(groupingBy(string->string));
        System.out.println(groupByMap);//{1=[1], 2=[2], 3=[3], 4=[4], 5=[5], 6=[6], 7=[7], 8=[8], 9=[9], 10=[10]}

        //组合收集器,1.统计数值
        Map<String, Long> groupByMap2 = list.stream().collect(groupingBy(string->string,counting()));
        System.out.println(groupByMap2);//{1=1, 2=1, 3=1, 4=1, 5=1, 6=1, 7=1, 8=1, 9=1, 10=1}

        //组合收集器,2.集合
        Map<String, List<String>> groupByMap3 = list.stream().collect(groupingBy(string->string,toList()));
        System.out.println(groupByMap3);//{1=[1], 2=[2], 3=[3], 4=[4], 5=[5], 6=[6], 7=[7], 8=[8], 9=[9], 10=[10]}

        //字符串
        String str = list.stream().collect(joining(",","[","]"));
        System.out.println(str);//[1,2,3,4,5,6,7,8,9,10]
    }
}`

    },
    components: {}
  }
</script>

<style>
  th {
    border-bottom: 1px solid #E6E8EB;
    border-top: 1px solid #E6E8EB;
  }

  td {
    border: 1px solid #E6E8EB;
  }

  table {
    width: 700px;
  }

  #__top_button {
    position: fixed;
    top: 88%;
    right: 8%;
  }

</style>
