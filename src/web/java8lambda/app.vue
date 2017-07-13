<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div>
    <div class="widewrapper main">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <article class="blog-post">
              <header>

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
                以上几个接口为java8内置接口,这里我试着用自己的接口实现了一下,可以发现,其实完全可以用自己的接口完成lambda表达式,
                代码如下:
                <pre>
                 {{codes.code001}}
                </pre>
                <pre>
                  public class IntTest&ltT&gt{
                  private T t;

                  public IntTest(T t) {
                  this.t = t;
                  }

                  public boolean check(IntPred&ltT&gt predicate){
                  return predicate.test(t);
                  }
                  }
                </pre>
                <pre>
                  public class TestIntPred {
                  public static void main(String[] args) {
                  IntTest&ltInteger&gt test = new IntTest(7);
                  boolean result = test.check(x -> x > 5);
                  System.out.println(result);
                  }
                  }
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
                <li>reduce(Predicate&ltT&gt):
                  <br/>这里介绍一下
                  <pre>public class ReduceTest {
                    public static void main(String[] args) {
                    List&ltString&gt list = new ArrayList<>();
                    for (int i = 1; i <= 10; i++) {
                    list.add(i + "");
                    }
                    String first = "";
                    String result = list.stream().reduce(first, (temp, str) -> temp + str + "\t");
                    System.out.println(result);
                    }
                    }
                  </pre>
                  <p>
                    结果:1	2	3	4	5	6	7	8	9	10
                  </p>
                </li>
                <li>flatMap(Function&lt? super T, ? extends Stream&lt? extends R>> mapper):
                  <br/>
                  <pre>
                  public class FlatMapTest {
                  public static void main(String[] args) {
                  List&ltString&gt list = new ArrayList<>();
                  for (int i = 1; i <= 10; i++) {
                  list.add(i + "");
                  }
                  List&ltString&gt list2 = new ArrayList<>();
                  for (int i = 1; i <= 10; i++) {
                  list.add(i+100 + "");
                  }
                  List&ltString&gt list3 = new ArrayList<>();
                  for (int i = 1; i <= 10; i++) {
                  list.add(i+200 + "");
                  }
                  List&ltList&ltString>> listAll = new ArrayList<>();
                  listAll.add(list);
                  listAll.add(list2);
                  listAll.add(list3);
                  System.out.println("原集合:\t"+listAll);
                  List&ltString> result = listAll.stream().flatMap(subList -> subList.stream()).collect(Collectors.toList());
                  System.out.println("flatMap后:\t"+result);
                  }
                  }</pre>
                  <p>
                    结果:<br/>
                    原集合:	[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [], []]<br/>
                    flatMap后:	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210]
                  </p>
                </li>
              </ul>
            </article>

            <aside class="social-icons clearfix">
              <h3>Share on </h3>
              <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a
              href="#"><i class="fa fa-google"></i></a>
            </aside>

            <aside class="comments" id="comments">
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
            </aside>

            <aside class="create-comment" id="create-comment">
              <hr>

              <h2><i class="fa fa-pencil"></i> Add Comment</h2>

              <form action="#" method="get" accept-charset="utf-8">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" name="name" id="comment-name" placeholder="Your Name"
                           class="form-control input-lg">
                  </div>
                  <div class="col-md-6">
                    <input type="email" name="email" id="comment-email" placeholder="Email"
                           class="form-control input-lg">
                  </div>
                </div>

                <input type="url" name="name" id="comment-url" placeholder="Website" class="form-control input-lg">

                <textarea rows="10" name="message" id="comment-body" placeholder="Your Message"
                          class="form-control input-lg"></textarea>

                <div class="buttons clearfix">
                  <button type="submit" class="btn btn-xlarge btn-clean-one">Submit</button>
                </div>
              </form>
            </aside>
          </div>
          <aside class="col-md-4 blog-aside">

            <div class="aside-widget">
              <header>
                <h3>Featured Post</h3>
              </header>
              <div class="body">
                <ul class="clean-list">
                  <li><a href="">Clean - Responsive HTML5 Template</a></li>
                  <li><a href="">Responsive Pricing Table</a></li>
                  <li><a href="">Yellow HTML5 Template</a></li>
                  <li><a href="">Blackor Responsive Theme</a></li>
                  <li><a href="">Portfolio Bootstrap Template</a></li>
                  <li><a href="">Clean Slider Template</a></li>
                </ul>
              </div>
            </div>

            <div class="aside-widget">
              <header>
                <h3>Related Post</h3>
              </header>
              <div class="body">
                <ul class="clean-list">
                  <li><a href="">Blackor Responsive Theme</a></li>
                  <li><a href="">Portfolio Bootstrap Template</a></li>
                  <li><a href="">Clean Slider Template</a></li>
                  <li><a href="">Clean - Responsive HTML5 Template</a></li>
                  <li><a href="">Responsive Pricing Table</a></li>
                  <li><a href="">Yellow HTML5 Template</a></li>
                </ul>
              </div>
            </div>

            <div class="aside-widget">
              <header>
                <h3>Tags</h3>
              </header>
              <div class="body clearfix">
                <ul class="tags">
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">CSS3</a></li>
                  <li><a href="#">COMPONENTS</a></li>
                  <li><a href="#">TEMPLATE</a></li>
                  <li><a href="#">PLUGIN</a></li>
                  <li><a href="#">BOOTSTRAP</a></li>
                  <li><a href="#">TUTORIAL</a></li>
                  <li><a href="#">UI/UX</a></li>
                </ul>
              </div>
            </div>
          </aside>
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
        codes:{},
      }
    },
    created:function(){
      this.codes['code001'] = `public interface IntPred<T> {
                                     boolean test(T value);
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

</style>
