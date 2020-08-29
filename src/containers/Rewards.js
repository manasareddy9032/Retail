import React, { Component } from 'react';

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseHistory: []
        }
    }

    calculateTransactionPoints = (points) => {
        let totalpoints = 0;
        totalpoints = points >= 100 ? totalpoints + (points - 100) * 2 + 50 : totalpoints + (points - 50) * 1;
        //  totalpoints = points < 100 ? totalpoints + (points % 50) * 1 : totalpoints;
        return totalpoints;
    }

    getTotalRewards = () => {
        const { purchaseHistory } = this.props;
        const totalPoints = purchaseHistory.length > 0 ? purchaseHistory.reduce((total, ele) => {
            const totalPoints = ele.rewards + total;
            return totalPoints
        }, 0) : 0;
        return totalPoints
    }

    render() {
        const rewardpoints = this.getTotalRewards();
        return (
            <div>
                Total Rewards: {rewardpoints}
            </div>
        )
    }
}

export default Rewards;