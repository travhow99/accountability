import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TaskContainer from '../components/TaskContainer';
import getTasksData from '../lib/tasks';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	const tasks = getTasksData(1) || [];
	console.log('taskstop', tasks)
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<TaskContainer data={tasks} />
			</section>
		</Layout>
	)
}
