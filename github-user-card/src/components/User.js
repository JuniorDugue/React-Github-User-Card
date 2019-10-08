import React from 'react';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react'

class User extends React.Component{
    render() {
        return (
            <div>
                <Card>
                    <Image src={this.props.avatar_url} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Github Name : {this.props.login}</span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.name} 's Github Profile
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a href = {`https://github.com/${this.props.login}`}>
                        <Icon name='user' />
                        {this.props.followers} followers
                    </a>
                    </Card.Content>
                </Card>
                <Card>
                    <CardContent>
                        {this.props.follower.map((followers) => {
                            return (<Card.Meta>
                                <Image src = {followers.avatar_url} />
                                {followers.login}
                                </Card.Meta>)
                        })}
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default User;