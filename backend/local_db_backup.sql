--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: job; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job (
    job_id integer NOT NULL,
    company character varying(255),
    "position" character varying(255),
    status character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    location character varying(255),
    type character varying(255)
);


ALTER TABLE public.job OWNER TO postgres;

--
-- Name: job_job_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.job_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.job_job_id_seq OWNER TO postgres;

--
-- Name: job_job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.job_job_id_seq OWNED BY public.job.job_id;


--
-- Name: job job_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job ALTER COLUMN job_id SET DEFAULT nextval('public.job_job_id_seq'::regclass);


--
-- Data for Name: job; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job (job_id, company, "position", status, created_at, location, type) FROM stdin;
121	hammad	ahmad asd	Pending	2024-08-16 11:48:00.221517	pakistan	Full-time
124	netlfix	nasdamsd	Pending	2024-08-17 07:48:31.713557	dasd	Full-time
128	hammad	ahmad	Passed	2024-08-17 08:06:11.748921	pakistan	Full-time
136	hammad	ahmad	Pending	2024-08-17 08:27:20.696577	asdsa	Full-time
137	hammad	ahmad	Pending	2024-08-17 08:27:20.738328	asdsa	Full-time
144	10wiz	manager	Pending	2024-08-17 08:48:14.700912	islu	Full-time
148	netflix	manager	Applied	2024-08-17 10:34:42.081	pak	Full-time
149	Netflix	Manager	Applied	2024-08-17 14:48:04.067663	Pakistan	Full-time
147	Facebook	aa	Applied	2024-08-17 10:28:11.214756	Australia	Full-time
108	hammad	ahmad	Applied	2024-08-15 09:50:57.044946	asdasd	Full-time
132	j	a	Passed	2024-08-17 08:21:11.56038	s	Full-time
150	Google	Software engineer	Pending	2024-08-30 16:32:28.0898	UNITED KINGDOM	Full-time
115	one man	madnasm	Applied	2024-08-15 10:14:15.8695	ssder	Internship
\.


--
-- Name: job_job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.job_job_id_seq', 150, true);


--
-- Name: job job_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_pkey PRIMARY KEY (job_id);


--
-- PostgreSQL database dump complete
--

