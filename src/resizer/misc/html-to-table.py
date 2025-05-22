import lxml.html

# 1. get a array of lines that contain <a class="proj-title"


html = """


           <div class="progect">
                <a href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-09-udziro-lake.jpg">
                    <img class="title-photo" src="https://s3.amazonaws.com/xeniaklimova-library/public/p370-img/paintings-oils/p370-2024-09-udziro-lake.jpg" alt="udziro-llake" width="370px"/>
                    <a class="proj-title" style="" href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-09-udziro-lake.jpg">A view on the Main Caucasian Range at sunrise from Lake Udziro, Racha, Georgia, 2800 meters above sea level.</br> Oil on canvas, 70cm x 50cm </br> September, 2024</a>
                </a>
            </div>

           <div class="progect">
                <a href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-08-00-sunflowers-framed.jpg">
                    <img class="title-photo" src="https://s3.amazonaws.com/xeniaklimova-library/public/p370-img/paintings-oils/p370-2024-08-00-sunflowers-framed.jpg" alt="bridge-model-006" width="370px"/>
                    <a class="proj-title" href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-08-00-sunflowers-framed.jpg">Sunflowers </br> Oil on canvas, 50cm x 60cm</br> August, 2024</a>
                </a>
            </div>

           <div class="progect">
                <a href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-08-00-three-sunflowers.jpg">
                    <img class="title-photo" src="https://s3.amazonaws.com/xeniaklimova-library/public/p370-img/paintings-oils/p370-2024-08-00-three-sunflowers.jpg" alt="bridge-model-006" width="370px"/>
                    <a class="proj-title" href="https://s3.amazonaws.com/xeniaklimova-library/public/p1200-img/paintings-oils/p1200-2024-08-00-three-sunflowers.jpg">Sunflowers </br> Oil on canvas, 40cm x 50cm</br> August, 2024</a>
                </a>
            </div>


"""

def main():
    
    handle = open('index.html','r')
    for line in handle:
        pref = '<a class="proj-title"'
        line1 = line.strip()
        if line1[:21] == pref:
            print(line1)
    handle.close()
    

   # root = lxml.html.fromstring(html)
   # for elem in root.cssselect('a.proj-title'):
   #     print(elem.tag)
   #     print(elem.get('href'))
   #     print(elem.text)

if __name__ == "__main__":
    main()

