import os
from settings import ENV_VARS
from jinja2 import Environment, BaseLoader, FileSystemLoader

def list_files_recursive(path, file_list):
    for entry in os.listdir(path):
            full_path = os.path.join(path, entry)
            if os.path.isdir(full_path):
                list_files_recursive(full_path, file_list)
            else:
                #print(full_path)
                file_list.append(full_path)

#def translate_file(file_path, output_dir):
    

def main():
    src_directory_path = '../web-src'
    target_dir_path = '../../dist-2'
    src_file_list = []
    list_files_recursive(src_directory_path, src_file_list)
    #print(src_file_list)
    for el in src_file_list:
        file_ext = el[-4:]
        if file_ext == "html":
            tgt_file = el.replace(src_directory_path, target_dir_path)
            curtailed_el = el.replace(src_directory_path, '')
            # 01234567
            # includes/
            top_dir = curtailed_el[1:9]
            #print(top_dir)
            if top_dir != 'includes':
                tgt_dir = os.path.dirname(tgt_file)
                os.makedirs(tgt_dir, exist_ok=True)
                #print(tgt_file)
                f = open(el, 'r', encoding='utf-8')
                src_text = f.read()
                f.close()
                temploader = FileSystemLoader(searchpath=src_directory_path)
                env = Environment(loader=temploader)
                print(curtailed_el)
                t = env.get_template(curtailed_el)
                #t = env.from_string(src_text)
                res = t.render(ENV_VARS)
                tf = open(tgt_file, 'w', encoding='utf-8')
                tf.write(res)
                tf.close()



if __name__ == "__main__":
    main()

