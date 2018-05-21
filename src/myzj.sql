-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 21 日 03:15
-- 服务器版本: 5.6.36
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `myzj`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods1`
--

CREATE TABLE IF NOT EXISTS `goods1` (
  `gid` tinyint(10) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(42) DEFAULT NULL,
  `anno` varchar(42) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods1`
--

INSERT INTO `goods1` (`gid`, `url`, `title`, `anno`, `price`) VALUES
(1, 'http://img.muyingzhijia.com/img/201803/20180315163659_10_1182.jpg', '好奇纸尿裤NB66低至55元', '好奇纸尿裤NB66低至55元', 55.00),
(2, 'http://img.muyingzhijia.com/img/201711/20171116133002_10_20171027110732_10_20171017140248_10_x.jpg', 'VTech伟易达点触多功能学习桌', 'VTech伟易达点触多功能学习桌', 319.00),
(3, 'http://img.muyingzhijia.com/img/201805/20180507174647_10_aptamil.jpg', '欧洲直邮德国爱他美满两单送米菲兔', '欧洲直邮德国爱他美满两单送米菲兔', 139.00),
(4, 'http://img.muyingzhijia.com/img/201805/20180515112501_10_1242.jpg', '韩国美食节', '韩国美食节', 6.90),
(5, 'http://img.muyingzhijia.com/img/201805/20180509173509_10_whitecat1242.jpg', '小白猫湿巾类买一送一', '小白猫湿巾类买一送一', 5.50);

-- --------------------------------------------------------

--
-- 表的结构 `goods2`
--

CREATE TABLE IF NOT EXISTS `goods2` (
  `gid2` tinyint(10) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(42) NOT NULL,
  `anno` varchar(42) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`gid2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods2`
--

INSERT INTO `goods2` (`gid2`, `url`, `title`, `anno`, `price`) VALUES
(1, 'http://img.muyingzhijia.com/img/201802/20180208112815_10_617636.jpg', 'VTech伟易达点触学习桌 none', 'VTech伟易达点触学习桌', 319.00),
(2, 'http://img.muyingzhijia.com/img/201804/20180428174137_10_638303.jpg', '\r\n保税区（包邮包税）荷兰牛栏5段（2罐起） none', '牛栏5段低至125元/罐', 145.00),
(3, 'http://img.muyingzhijia.com/img/201706/20170619113308_10_yd.jpg', '\r\n婴蒂诺 Infantino 多纹理球6粒套装 none', '婴蒂诺 Infantino', 79.00),
(4, 'http://img.muyingzhijia.com/img/201802/20180202175744_6_561315.jpg', '汤美天地“母乳自然”电子消毒锅 none', '汤美电子消毒锅，含奶瓶夹及奶瓶刷', 399.00),
(5, 'http://img.muyingzhijia.com/product/web/toutu/87080111.jpg', '美德乐丝韵·翼双侧双韵律双边电动吸乳器 none', '双边吸奶器，节省妈妈一半的时间', 1799.00);

-- --------------------------------------------------------

--
-- 表的结构 `goods3`
--

CREATE TABLE IF NOT EXISTS `goods3` (
  `gid3` tinyint(10) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`gid3`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods3`
--

INSERT INTO `goods3` (`gid3`, `url`) VALUES
(1, 'http://img.boodoll.cn/img/201607/20160704125336_10_20160328110347_10_leftdown-1.jpg'),
(2, 'http://img2.muyingzhijia.com/product/images/brand/wyeth.jpg'),
(3, 'http://img2.muyingzhijia.com/product/images/brand/friso.jpg'),
(4, 'http://img2.muyingzhijia.com/product/images/brand/illuma.jpg'),
(5, 'http://img2.muyingzhijia.com/product/images/brand/moony.jpg'),
(6, 'http://img2.muyingzhijia.com/product/images/brand/pouch.jpg'),
(7, 'http://img2.muyingzhijia.com/product/images/brand/britax.jpg'),
(8, 'http://img.muyingzhijia.com/img/201507/20150709165823_1619_logo.jpg'),
(9, 'http://img2.muyingzhijia.com/product/images/brand/pigeon.jpg'),
(10, 'http://img.muyingzhijia.com/img/201803/20180322103042_10_20160704125251_10_20160531173724_10_20150701102116_1619_370x160-1.jpg'),
(11, 'http://img2.muyingzhijia.com/product/images/brand/huggies.jpg'),
(12, 'http://img2.muyingzhijia.com/product/images/brand/huawang.jpg'),
(13, 'http://img2.muyingzhijia.com/product/images/brand/medela.jpg'),
(14, 'http://img2.muyingzhijia.com/product/images/brand/nemans.jpg'),
(15, 'http://img.muyingzhijia.com/product/web/toutu/xbxios-1.jpg'),
(16, 'http://img2.muyingzhijia.com/product/images/brand/hipp.jpg'),
(17, 'http://img2.muyingzhijia.com/product/images/brand/littletikes.jpg'),
(18, 'http://img2.muyingzhijia.com/product/images/brand/avent.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `goods4`
--

CREATE TABLE IF NOT EXISTS `goods4` (
  `gid` tinyint(10) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(42) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods4`
--

INSERT INTO `goods4` (`gid`, `url`, `title`, `price`) VALUES
(1, 'http://img.boodoll.cn/Product/normal/157198_01_01.jpg', '贝儿欣餐具套餐蓝色（围兜+吸盘+扭扭匙羹）', 79.00),
(2, 'http://img.boodoll.cn/Product/normal/155734_01_01.jpg', '美国怡饭 Eat4Fun儿童不锈钢叉勺套装-海盗', 69.00),
(3, 'http://img.boodoll.cn/pdt/img/f4/9bba92185848495_160X160.jpg', '小白熊婴儿营养食物调理机', 399.00);

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

CREATE TABLE IF NOT EXISTS `lunbo` (
  `lid` tinyint(10) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`lid`, `url`) VALUES
(1, 'http://img.muyingzhijia.com/img/201803/20180313134502_10_1090-350.jpg'),
(2, 'http://img.muyingzhijia.com/img/201805/20180515181939_10_1090.jpg'),
(3, 'http://img.muyingzhijia.com/img/201804/20180426095410_10_alula1090.jpg'),
(4, 'http://img.muyingzhijia.com/img/201804/20180410135755_10_heinz1090.jpg'),
(5, 'http://img.muyingzhijia.com/img/201805/20180504160802_10_20170519173556_10_1090x1350.jpg'),
(6, 'http://img.muyingzhijia.com/img/201804/20180410172907_10_tommee.jpg'),
(7, 'http://img.muyingzhijia.com/img/201804/20180427172259_10_babymore.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `nav`
--

CREATE TABLE IF NOT EXISTS `nav` (
  `sid` tinyint(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `title` varchar(42) NOT NULL,
  `content` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `nav`
--

INSERT INTO `nav` (`sid`, `name`, `title`, `content`) VALUES
(1, 'nav2', '妈妈专区;哺乳喂养;奶粉辅食;纸尿裤湿巾;洗护用品;宝宝服饰;童车座椅;玩具;床椅寝', ''),
(2, 'nav3', '孕妇内衣;孕妇装;母乳喂养;孕妈美容', '哺乳文胸,孕妇内裤/托腹带;孕妇帽/产妇帽,孕妇鞋/袜,防辐射服/用品,月子服/哺乳衣/居家服,上衣薄外套,裤子/打底裤/裙子;吸奶器,母乳储存,防溢乳垫,保温冰包/盒;眼部护理,面部护理,身体护理,');

-- --------------------------------------------------------

--
-- 表的结构 `pic`
--

CREATE TABLE IF NOT EXISTS `pic` (
  `pid` tinyint(1) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `pic`
--

INSERT INTO `pic` (`pid`, `url`, `title`) VALUES
(1, 'http://static.boodoll.cn/omall/v15/images/logo29new.png', 'logo'),
(2, 'http://img.muyingzhijia.com/product/web/toutu/150211-340x300-2.jpg', 'download');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` tinyint(20) NOT NULL AUTO_INCREMENT,
  `phonenum` tinyint(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `phonenum`, `password`) VALUES
(1, 12, '123'),
(2, 123, '4567'),
(3, 12, ''),
(4, 127, '123456'),
(5, 127, '13758149829');
