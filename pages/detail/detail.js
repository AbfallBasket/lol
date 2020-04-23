import {details} from '../data/lol_details_duowan'
// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        details
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.id)
        console.log(details)

        const heroIntro = details.find(item => {
            return item.id === options.id
        })
        console.log(heroIntro)

        this.setData({
            details: heroIntro
        })

        console.log(this.data.details)
        // 设置 标题
        wx.setNavigationBarTitle({
            title: `${heroIntro.title}-${heroIntro.name}`
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
