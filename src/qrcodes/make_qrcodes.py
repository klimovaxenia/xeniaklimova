import logging
import qrcode

ROOT_PATH='https://xeniaklimova.com/projects/gtu/'

PROJECTS=['birtvisi','lobster']

def make_qrcodes():
    for proj in PROJECTS:
        full_url = ROOT_PATH + proj + '/'
        img = qrcode.make(full_url)
        img.save('img/' + proj + '.png')


if __name__ == "__main__":
    logging.basicConfig(
        #level=logging.INFO,
        level=logging.DEBUG,
        format="%(asctime)s:%(levelname)s:%(message)s"
        )
    make_qrcodes()
