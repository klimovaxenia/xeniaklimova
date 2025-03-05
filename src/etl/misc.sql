create table u_xenia.xkpics_clean as (
with z as (
select
  replace((regexp_matches(t.pic_name, 'http.+"'))[1], '"', '') as url,
  t.pic_name
from
  u_xenia.xkpics t
)
select
  --z.url,
  replace(
    (regexp_matches(z.url, '[a-z,0-9,\-]+.[a-z]+$'))[1],
    'p1200-', ''
  )::varchar(2000) as file_name,
  replace(
    replace(
      (regexp_matches(z.pic_name, '">[a-z,A-Z,0-9, ,\,,\.]+<'))[1],
      '">', ''
    ),
    '<', ''
  )::varchar(2000) as title,
  replace(
    replace(
      (regexp_matches(z.pic_name, 'br>[a-z,A-Z,0-9, ,\,,\.]+</a>'))[1],
      'br> ',''
    ),
    '</a>',''
  )::varchar(2000) as descr
  --z.pic_name
from
  z
);
