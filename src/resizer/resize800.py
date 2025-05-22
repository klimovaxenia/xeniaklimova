from PIL import Image
import sys

def get_px(path):
    width, height = Image.open(path).size
    return width

def main():
    base_width = 800
    #base_width = 1200
    source = sys.argv[1]
    target = sys.argv[2]
    #img = Image.open('full-size-img/graphics/antinoy-102.jpg')
    img = Image.open(source)
    print(get_px(source))
    #if get_px(source) > 370:
    if get_px(source) > 800:
        wpercent = (base_width / float(img.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        img = img.resize((base_width, hsize), Image.Resampling.LANCZOS)
    #img.save('p800-img/graphics/p800-antinoy-102.jpg')
    img.save(target)

    print(sys.argv)

if __name__ == "__main__":
    main()

