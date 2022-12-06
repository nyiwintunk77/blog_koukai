import React from 'react';
import { Route } from 'react-router';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReadPage from './pages/PostReadPage';
import WritePage from './pages/WritePage';
import './App.css';
import UserInfo from './pages/UserInfo';
import UpdateUserPage from './pages/UpdateUserPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>KeyKey World</title>
        </Helmet>
        <Route component={PostListPage} path="/blog_koukai/" exact />
        <Route component={LoginPage} path="/blog_koukai/login" />
        <Route component={RegisterPage} path="/blog_koukai/register" />
        <Route component={ReadPage} path="/blog_koukai/:username/:postId" />
        <Route component={WritePage} path="/blog_koukai/write" />
        <Route component={UserInfo} path="/blog_koukai/userInfo" />
        <Route component={UpdateUserPage} path="/blog_koukai/updateuser" /> 
    </div>
  );
}

export default App;
