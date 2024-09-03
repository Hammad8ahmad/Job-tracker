PGDMP  *    6                |        
   jobtracker    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 
   jobtracker    DATABASE     �   CREATE DATABASE jobtracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE jobtracker;
                postgres    false            �            1259    16400    job    TABLE     3  CREATE TABLE public.job (
    job_id integer NOT NULL,
    company character varying(255),
    "position" character varying(255),
    status character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    location character varying(255),
    type character varying(255)
);
    DROP TABLE public.job;
       public         heap    postgres    false            �            1259    16399    job_job_id_seq    SEQUENCE     �   CREATE SEQUENCE public.job_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.job_job_id_seq;
       public          postgres    false    216            �           0    0    job_job_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.job_job_id_seq OWNED BY public.job.job_id;
          public          postgres    false    215                       2604    16403 
   job job_id    DEFAULT     h   ALTER TABLE ONLY public.job ALTER COLUMN job_id SET DEFAULT nextval('public.job_job_id_seq'::regclass);
 9   ALTER TABLE public.job ALTER COLUMN job_id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16400    job 
   TABLE DATA           ^   COPY public.job (job_id, company, "position", status, created_at, location, type) FROM stdin;
    public          postgres    false    216   4       �           0    0    job_job_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.job_job_id_seq', 151, true);
          public          postgres    false    215                       2606    16407    job job_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_pkey PRIMARY KEY (job_id);
 6   ALTER TABLE ONLY public.job DROP CONSTRAINT job_pkey;
       public            postgres    false    216            �   �  x�}��n!F��O��������&�����lS�0�+Q��PE�L�d���~��������|��1�.�=j�vM#r�:D.i2p�ǘ'������)aE�,Po1��u�8��H+���Z�s�R@�����߇�;�2)n[sY0,�0�����rs:�1ts
���)��R�� ��}!<|@P��(��i	�W�(w�W�9�G���9DIC\�ú��K�ξ�-h�j�p4��it�pT�UMU[���#�7�2f��j+TG�Jy~I#܏��u�MO�XH��n$2j�%P��Z���|�t�>o���_�X�0��J?��.�<\�T�ɤ�mZ9w��M��9�C<�H��t���L@���k߷$4�*Iܐ���k5�^|�}�y�z?��ܮQ2�Z��/#,�/<�[�n��~��j�eg�     